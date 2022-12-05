import React, {useContext} from "react";
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
import { AuthContext } from "../context/Auth";

const SignIn: React.FC = () => {
	const {setUserData} = useContext(AuthContext);

	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm();
	const navigate = useNavigate();
	async function onSubmit(values: any) {
		try{
			const url = "https://change-log-app-production.up.railway.app/api/user/signin";
			const response = await axios.post(
				url, values
			);
			setUserData(response.data);
			
			navigate("/cards");
		} catch(err){
            
			alert("Erro no login");
		}
		
	}
	return(
		<>  
			<Flex color={"black.100"} >
				<Center w="100%" h="200px">
					<Heading as="h1" size="2xl">SignIn</Heading>
				</Center>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex color={"black.100"}>
					<Spacer />
				
					<Center w="40%" h="200px" >
						<FormControl isRequired >
							<FormLabel htmlFor='email'mt={4}>Email</FormLabel>
							<Input 
								id="Email"
								color={"black.100"} 
								type="Email" 
								placeholder="Email" 
								bg="gray.500" 
								size="lg"
								{...register("email")}
                                
							/>

							<FormLabel mt={4} >Password</FormLabel>
							<Input 
								type="password" 
								placeholder="Password" 
								bg="gray.500" 
								size="lg"
								{...register("password")}
							/>

							{/* <Link to="/cardPage"> */}
							<Button isLoading={isSubmitting} type='submit' mt={10} bg="gray.1000" w="100%" h="50px">
                                    Login
							</Button>
							{/* </Link> */}
							
						</FormControl>
					</Center>
					<Spacer />
				</Flex>
			</form>
			
		</>
	);
};

export default SignIn;