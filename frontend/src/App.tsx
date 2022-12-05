import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {AuthProvider} from "./context/Auth";
import CardPage from "./pages/CardPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {

	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/cards" element={<CardPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
