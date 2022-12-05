import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPage from "./pages/CardPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/cardPage" element={<CardPage />} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;
