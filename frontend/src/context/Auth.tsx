/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext , ReactNode, useState } from "react";

type ContextProps = {
    children: ReactNode
}

type DataType = {
    userData: any,
	setUserData: (newState: any) => void
}

const initialValue = {
	userData: {},
	setUserData: () => {},
};

export const AuthContext = createContext<DataType>(initialValue);


export const AuthProvider = ({children}: ContextProps) => {
	const [userData, setUserData] = useState(initialValue.userData);

	return <AuthContext.Provider value={{userData, setUserData}}>
		{children}
	</AuthContext.Provider>;
};
