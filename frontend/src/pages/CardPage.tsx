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
	Box,
	Select
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
	const [idButton, setIdButton] = useState<string>();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isOpenModalUpdate, onOpen: onOpenModalUpdate, onClose: onCloseModalUpdate } = useDisclosure();
	const { isOpen: isOpenModalUpdate2, onOpen: onOpenModalUpdate2, onClose: onCloseModalUpdate2 } = useDisclosure();
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm();
	
	useEffect(() => {
		const url = "https://change-log-app-production.up.railway.app/api/card?page=1&limit=10";
		axios.get(
			url, {
				headers: { Authorization: `Bearer ${userData.accessToken}` }
			}
		).then((response) => setData(response.data));

	}, []);


	async function handleClick(values: any) {
		try{
			const url = `https://change-log-app-production.up.railway.app/api/card/${values.currentTarget.id}`;
			await axios.delete(
				url, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			const url2 = "https://change-log-app-production.up.railway.app/api/card?page=1&limit=10";
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
			const url = "https://change-log-app-production.up.railway.app/api/card/";
			await axios.post(
				url, values, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			const url2 = "https://change-log-app-production.up.railway.app/api/card?page=1&limit=10";
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
			const url = `https://change-log-app-production.up.railway.app/api/card/filter?date=${values.date}&creator=${values.creatorFilter}&title=${values.titleFilter}&page=1&limit=10`;
			
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

	async function execute(values:any){
		onOpenModalUpdate();
		setIdButton(values.currentTarget.id);
	}

	async function execute2(values:any){
		onOpenModalUpdate2();
		setIdButton(values.currentTarget.id);
	}

	async function onSubmitUpdate(values: any) {
		try{
			const url = "https://change-log-app-production.up.railway.app/api/card/";
			const data = {
				cardId: idButton,
				description: values.description_update

			};
			await axios.patch(
				url, data, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			const url2 = "https://change-log-app-production.up.railway.app/api/card?page=1&limit=10";
			const newResponse  = await axios.get(
				url2, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			setData(newResponse.data);
			
			console.log(values);
		} catch(err){
			console.log(err);
		}
		
	}

	async function onSubmitUpdate2(values: any) {
		try{
			const url = `https://change-log-app-production.up.railway.app/api/card/${idButton}`;
			const data = {
				
				title: values.title_update,
				status: values.status,

			};
			await axios.put(
				url, data, {
					headers: { Authorization: `Bearer ${userData.accessToken}` }
				}
			);

			const url2 = "https://change-log-app-production.up.railway.app/api/card?page=1&limit=10";
			const newResponse  = await axios.get(
				url2, {
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
			<Flex color={"black.100"} bg="gray.1000">
				<Flex w="100%" align="center">
					<Center w="100%" h="100px">
						<Heading as="h1" size="2xl" ml="20px">Change Log</Heading>
						<Spacer />
					</Center>
				</Flex>
				<Flex w="100%" align="center" justify="flex-end">
					<Button w="50%"color={"black.1000"} mr="10px" onClick={onOpen}>Create Card</Button>
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
										<FormLabel color={"black.1000"}>Title</FormLabel>
										<Center w="100%" h="48px">
											<Input color={"black.1000"} placeholder="Ex: Project 1" {...register("title")}/>
										</Center>
									</Flex>
									<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
										<FormLabel color={"black.1000"}>Description Initial</FormLabel>
										<Center w="100%" h="48px">
											<Input color={"black.1000"} placeholder="Ex: Init project 1"  {...register("description")}/>
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
							<FormLabel color={"black.100"}>Date</FormLabel>
							<Center w="100%" h="48px"  >
								<Input type="date" color={"black.100"} {...register("date")}/>
							</Center>
						</Flex>
						<Flex w="100%" direction="column" h="100px" ml="10px" mr="10px">
							<FormLabel color={"black.100"}>Creator</FormLabel>
							<Center w="100%" h="48px">
								<Input color={"black.100"} placeholder="Ex: Jonh" {...register("creatorFilter")}/>
							</Center>
						</Flex>
					
						<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
							<FormLabel color={"black.100"}>Title</FormLabel>
							<Center w="100%" h="48px">
								<Input color={"black.100"} placeholder="Ex: Project 1" {...register("titleFilter")}/>
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
									
			<SimpleGrid m="4" spacing={4} templateColumns='repeat(auto-fill, minmax(450px, 1fr))'>
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
																<Text fontSize="sm">{description.text}</Text>
															</Box>
															<Box>
																<Text fontSize="md">CreatedAt:</Text>
																<Text fontSize="sm">{
																	new Date(description.createdAt).toISOString().split("T")[0]
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
												<Button bg="green.500" id={card.id} onClick={execute}>
                                                Add new description
												</Button>
												<Button bg="red.500" id={card.id} onClick={handleClick}>
                                                Delete
												</Button>
												<Button bg="yellow.500" id={card.id} onClick={execute2}>
                                                Update Card
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
			<Modal isOpen={isOpenModalUpdate} onClose={onCloseModalUpdate}>
				<form onSubmit={handleSubmit(onSubmitUpdate)}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Add description</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl>
								
								<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
									<FormLabel color={"black.1000"}>Description</FormLabel>
									<Center w="100%" h="48px">
										<Input color={"black.1000"} placeholder="Ex: Init project 1"  {...register("description_update")}/>
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

			<Modal isOpen={isOpenModalUpdate2} onClose={onCloseModalUpdate2}>
				<form onSubmit={handleSubmit(onSubmitUpdate2)}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Add description</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl>
								
								<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
									<FormLabel color={"black.1000"}>Title</FormLabel>
									<Center w="100%" h="48px">
										<Input color={"black.1000"} placeholder="Ex: Init project 1"  {...register("title_update")}/>
									</Center>
								</Flex>
								<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
									<FormLabel color={"black.1000"}>Status</FormLabel>
									<Center w="100%" h="48px">
										<Input color={"black.1000"} placeholder="InProgress or Closed"  {...register("status")}/>
									</Center>
								</Flex>
								<Center w="100%" mb="10px">
									<Button w="100%" type="submit"isLoading={isSubmitting}>Update</Button>
								</Center>
							</FormControl>
						</ModalBody>
					</ModalContent>
				</form>
			</Modal>
		</>
	);
};

export default CardPage;