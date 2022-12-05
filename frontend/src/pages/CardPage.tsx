import React, { useContext, useEffect, useState } from "react";
import {
	Center,
	Heading,
	Flex,
	Button,
	SimpleGrid,
	FormLabel,
	FormControl,
	Input,
	Spacer,
	Text,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	ButtonGroup,
	StackDivider,
	Stack, 
	useDisclosure, 
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Box
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface dataProps{
    id: string
    title: string
    creatorName: string
    descriptions:{
        text:string
        createdAt: string
    }[]
    status: string
}

const CardPage: React.FC = () => {
	const {userData, setUserData} = useContext(AuthContext);
	const [data, setData] = useState<dataProps[]>([]);
	const [deleted, setIsDeleted] = useState<boolean>(false);
	const [created, setIsCreated] = useState<boolean>(false);
	const [filtered, setIsfiltered] = useState<boolean>(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm();
	
	useEffect(() => {
		const url = "http://localhost:3333/api/card?page=1&limit=10";
		axios.get(
			url, {
				headers: { Authorization: `Bearer ${userData.accessToken}` }
			}
		).then((response) => setData(response.data));

	}, []);


	async function handleClick(values: any) {
		try{
			const url = `http://localhost:3333/api/card/${values.currentTarget.id}`;
			await axios.delete(
				url, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			const url2 = "http://localhost:3333/api/card?page=1&limit=10";
			const newResponse  = await axios.get(
				url2, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			setData(newResponse.data);
			
		} catch(err){
			console.log(err);
		}
		
	}

	async function onSubmit(values: any) {
		try{
			const url = "http://localhost:3333/api/card/";
			await axios.post(
				url, values, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			const url2 = "http://localhost:3333/api/card?page=1&limit=10";
			const newResponse  = await axios.get(
				url2, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			setData(newResponse.data);
			
		} catch(err){
			console.log(err);
		}
		
	}

	async function onSubmitFilter(values: any) {
		try{
			const url = `http://localhost:3333/api/card/filter?date=${values.date}&creator=${values.creatorFilter}&title=${values.titleFilter}&page=1&limit=10`;
			
			const newResponse = await axios.get(
				url, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);
			setData(newResponse.data);
			
			console.log(values);
		} catch(err){
			console.log(err);
		}
		
	}


	return(
		<>  
			<Flex color={"datack.100"} bg="gray.1000">
				<Flex w="100%" align="center">
					<Center w="100%" h="100px">
						<Heading as="h1" size="2xl" ml="20px">Change Log</Heading>
						<Spacer />
					</Center>
				</Flex>
				<Flex w="100%" align="center" justify="flex-end">
					<Button w="50%"color={"datack.1000"} mr="10px" onClick={onOpen}>Create Card</Button>
				</Flex>
				<Modal isOpen={isOpen} onClose={onClose}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Create Card</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
							
								<FormControl>
									<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
										<FormLabel color={"datack.1000"}>Title</FormLabel>
										<Center w="100%" h="48px">
											<Input color={"datack.1000"} placeholder="Ex: Project 1" {...register("title")}/>
										</Center>
									</Flex>
									<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
										<FormLabel color={"datack.1000"}>Description Initial</FormLabel>
										<Center w="100%" h="48px">
											<Input color={"datack.1000"} placeholder="Ex: Init project 1"  {...register("description")}/>
										</Center>

									</Flex>
									<Center w="100%" mb="10px">
										<Button w="100%" type="submit"isLoading={isSubmitting}>Create</Button>
									</Center>
								</FormControl>
							
							
							</ModalBody>
						</ModalContent>
					</form>
				</Modal>
			</Flex>

			<form onSubmit={handleSubmit(onSubmitFilter)}>
				<FormControl>
					<Flex align="center" w="100%" h="100px" justify="space-around" dir="row" ml="20px" mt="10px">
						<Flex w="100%" direction="column" h="100px" ml="10px" mr="10px">
							<FormLabel color={"datack.100"}>Date</FormLabel>
							<Center w="100%" h="48px"  >
								<Input type="date" color={"datack.100"} {...register("date")}/>
							</Center>
						</Flex>
						<Flex w="100%" direction="column" h="100px" ml="10px" mr="10px">
							<FormLabel color={"datack.100"}>Creator</FormLabel>
							<Center w="100%" h="48px">
								<Input color={"datack.100"} placeholder="Ex: Jonh" {...register("creatorFilter")}/>
							</Center>
						</Flex>
					
						<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
							<FormLabel color={"datack.100"}>Title</FormLabel>
							<Center w="100%" h="48px">
								<Input color={"datack.100"} placeholder="Ex: Project 1" {...register("titleFilter")}/>
							</Center>
						</Flex>
					
						<Flex w="100%" direction="column" alignItems="center" h="100px" justify="center" ml="10px" mr="30px" mt="10px">
							<Center w="100%" h="48px">
								<Button type="submit" w="100%" >Filter</Button>
							</Center>
						</Flex>
					
						
					</Flex>
				</FormControl>
			</form>
			
			
								
			<SimpleGrid m="4" spacing={4} templateColumns='repeat(auto-fill, minmax(270px, 1fr))'>
				{
					data.length > 0 ? 
						data.map((card): JSX.Element => {
							return (
								<>
									<Card bg="gray.500" ml="20px">
										<CardHeader>
											<Heading size='md'>{card.title}</Heading>
											<Text fontSize="xs">Creator: {card.creatorName}</Text>
										</CardHeader>
										<CardBody>
											<Stack divider={<StackDivider />} spacing='4'>
												{card.descriptions.map((description) => {
													return(
														<>
															<Box >
																<Text fontSize="md">Descrição do Projeto</Text>
																<Text fontSize="sm">{card.descriptions[0].text}</Text>
															</Box>
															<Box>
																<Text fontSize="md">CreatedAt:</Text>
																<Text fontSize="sm">{
																	new Date(card.descriptions[0].createdAt).toISOString().split("T")[0]
																}</Text>
															</Box>
														</>
													);
												})}
												<Box>
													<Text fontSize="md">Status:</Text>
												
													<Card bg={card.status == "InProgress" ? "yellow.500" : "green.500"} size="sm">
														<CardBody >
															{card.status}
														</CardBody>
													</Card>
												</Box>
											</Stack>
							
										</CardBody>
										<CardFooter>
											<ButtonGroup>
												<Button bg="red.500" id={card.id} onClick={handleClick}>
                                                Delete
												</Button>
											</ButtonGroup>
				
										</CardFooter>
									</Card>
								</>
                            
							);
						}) 
						: <div></div>
				} 
			</SimpleGrid>
			
			
		</>
	);
};

export default CardPage;