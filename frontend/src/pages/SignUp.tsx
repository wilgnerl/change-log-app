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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp: React.FC = () => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm();
	const navigate = useNavigate();
	async function onSubmit(values: any) {
		try{
			const url = "http://localhost:3333/api/user/signup";
			await axios.post(
				url, values
			);
			navigate("/signin");
		} catch(err){
			console.log(err);
		}
		
	}
	return(
		<>  
			<Flex color={"black.100"} >
				<Center w="100%" h="300px">
					<Heading as="h1" size="2xl">SignUp</Heading>
				</Center>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex color={"black.100"}>
					<Spacer />
					<Center w="35%" h="200px" >
					
						<FormControl isRequired >
							<FormLabel mt={4}>Name</FormLabel>
							<Input placeholder="Name" bg="gray.500" size="lg" {...register("name")}/>

							<FormLabel mt={4}>Email</FormLabel>
							<Input type="Email" placeholder="Email"bg="gray.500" size="lg" {...register("email")}/>

							<FormLabel mt={4} >Password</FormLabel>
							<Input type="password" placeholder="Password"bg="gray.500" size="lg" {...register("password")}/>

							<FormLabel mt={4} >Confirme Password</FormLabel>
							<Input type="password" placeholder="Password"bg="gray.500" size="lg" {...register("passwordConfirmation")}/>

							<Center>
								<Button type="submit" isLoading={isSubmitting} mt={10} bg="gray.1000" w="100%" h="50px">
                                Subscribe
								</Button>
							
							</Center>
						</FormControl>
					
					</Center>
					<Spacer />
				</Flex>
			</form>
		</>
	);
};

export default SignUp;