import React from "react";
import {
	Center,
	Heading,
	Flex,
	Button,
	Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
    
	return(
		<>
        
			<Flex color={"black.100"}>
				<Center w="100%" h="200px">
					<Heading as={"h1"} size="3xl">Change Log App</Heading>
				</Center>   
			</Flex>
			<Flex>
				<Center 
					w="100%" 
					h="200px" 
				>
					<Stack spacing={10}>
						<Link to="/signin">
							<Button 
								height='50px'
								width='400px'
								fontSize="20px"
								bg="black.100"
							>
                            SignIn
							</Button>
						</Link>
						<Link to="/signup">
							<Button 
								height='50px'
								width='400px'
								fontSize="20px"
								bg="black.100"
							>
                            SignUp
							</Button>
						</Link>
						
					</Stack>
				</Center>  
			</Flex>
			
		</>
	);
};

export default Home;