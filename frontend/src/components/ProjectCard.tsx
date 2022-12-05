import React from "react";
import {
	Heading,
	Button,
	Box,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Text,
	ButtonGroup,
	StackDivider,
	Stack, 
	useDisclosure, 
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

export default function ProjectCard(){
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Card bg="gray.500" ml="20px">
				<CardHeader>
					<Heading size='md'>Titulo</Heading>
					<Text fontSize="xs">Creator: Wigner Lopes</Text>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing='4'>
						<Box >
							<Text fontSize="md">Descrição do Projeto</Text>
							<Text fontSize="sm">xxxxxx</Text>
						</Box>
						<Box>
							<Text fontSize="md">CreatedAt:</Text>
							<Text fontSize="sm">xxxx-xx-xx</Text>
						</Box>
						<Box>
							<Text fontSize="md">Status:</Text>
							<Card bg="orange.500" size="sm">
								<CardBody >
                                xxxx
								</CardBody>
							</Card>
						</Box>
							
								
					</Stack>
							
				</CardBody>
				<CardFooter>
					<ButtonGroup>
						<Button bg="gray.100" onClick={onOpen}>
                            Expand
						</Button>
						<Button bg="red.500">
                            Delete
						</Button>
					</ButtonGroup>
				
				</CardFooter>
			</Card>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Stack divider={<StackDivider />} bg="gray.100" p="20px" mt="10px"borderRadius="10px" spacing='4'>
							<Box >
								<Text fontSize="md">Descrição do Projeto</Text>
								<Text fontSize="sm">xxxxxx</Text>
							</Box>
							<Box>
								<Text fontSize="md">CreatedAt:</Text>
								<Text fontSize="sm">xxxx-xx-xx</Text>
							</Box>
							<Box>
								<Text fontSize="md">Status:</Text>
								<Card bg="orange.500" size="sm">
									<CardBody >
                                xxxx
									</CardBody>
								</Card>
							</Box>
							
								
						</Stack>
						<Stack divider={<StackDivider />} bg="gray.100" p="20px" borderRadius="10px" mt="10px" spacing='4'>
							<Box >
								<Text fontSize="md">Descrição do Projeto</Text>
								<Text fontSize="sm">xxxxxx</Text>
							</Box>
							<Box>
								<Text fontSize="md">CreatedAt:</Text>
								<Text fontSize="sm">xxxx-xx-xx</Text>
							</Box>
							<Box>
								<Text fontSize="md">Status:</Text>
								<Card bg="orange.500" size="sm">
									<CardBody >
                                xxxx
									</CardBody>
								</Card>
							</Box>
							
								
						</Stack>
					</ModalBody>

					<ModalFooter>
						<Button color='blue.500' mr={3} onClick={onClose}>
                            Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
        
	);
}