import React from "react";
import {
	Center,
	Heading,
	Flex,
	Button,
	SimpleGrid,
	FormLabel,
	FormControl,
	Input,
	Spacer
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";


export default function CardPage(){
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
					<Button w="50%"color={"black.1000"} mr="10px">Create Card</Button>
				</Flex>
			</Flex>
			<FormControl>
				<Flex align="center" w="100%" h="100px" justify="space-around" dir="row" ml="20px" mt="10px">
					<Flex w="100%" direction="column" h="100px" ml="10px" mr="10px">
						<FormLabel color={"black.100"}>Date</FormLabel>
						<Center w="100%" h="48px"  >
							<Input type="date" color={"black.100"} />
						</Center>
					</Flex>
					<Flex w="100%" direction="column" h="100px" ml="10px" mr="10px">
						<FormLabel color={"black.100"}>Creator</FormLabel>
						<Center w="100%" h="48px">
							<Input color={"black.100"} placeholder="Ex: Jonh" />
						</Center>
					</Flex>
					
					<Flex w="100%" direction="column"h="100px" ml="10px" mr="10px">
						<FormLabel color={"black.100"}>Title</FormLabel>
						<Center w="100%" h="48px">
							<Input color={"black.100"} placeholder="Ex: Project 1" />
						</Center>
					</Flex>
					
					<Flex w="100%" direction="column" alignItems="center" h="100px" justify="center" ml="10px" mr="30px" mt="10px">
						<Center w="100%" h="48px">
							<Button type="submit" w="100%">Filter</Button>
						</Center>
					</Flex>
					
						
				</Flex>
			</FormControl>
			
								
			<SimpleGrid m="4" spacing={4} templateColumns='repeat(auto-fill, minmax(270px, 1fr))'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</SimpleGrid>
		</>
	);
}