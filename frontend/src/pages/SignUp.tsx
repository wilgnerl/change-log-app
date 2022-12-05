import React from "react";
import {
	Center,
	Heading,
	Flex,
	Button,
	FormControl,
	FormLabel,
	Input,
	Spacer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function SignUp(){
	return(
		<>  
			<Flex color={"black.100"} >
				<Center w="100%" h="300px">
					<Heading as="h1" size="2xl">SignUp</Heading>
				</Center>
			</Flex>
			<Flex color={"black.100"}>
				<Spacer />
				<Center w="35%" h="200px" >
					<FormControl isRequired >
						<FormLabel mt={4}>Name</FormLabel>
						<Input placeholder="Name" bg="gray.500" size="lg"/>

						<FormLabel mt={4}>Email</FormLabel>
						<Input type="Email" placeholder="Email"bg="gray.500" size="lg"/>

						<FormLabel mt={4} >Password</FormLabel>
						<Input type="password" placeholder="Password"bg="gray.500" size="lg"/>

						<FormLabel mt={4} >Confirme Password</FormLabel>
						<Input type="password" placeholder="Password"bg="gray.500" size="lg"/>

						<Center>
							<Link to="/signin">
								<Button type="submit" mt={10} bg="gray.1000" w="100%" h="50px">
                                    Subscribe
								</Button>
							</Link>
							
						</Center>
					</FormControl>
				</Center>
				<Spacer />
			</Flex>
			
		</>
	);
}