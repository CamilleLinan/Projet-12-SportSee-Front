import { createContext, useEffect, useState } from "react"
import { UserType } from "../types/UserType";
import UserService from "../services/UserService";

interface UserData {
    userData: UserType | undefined;
    isLoading: boolean;
}

interface ProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<UserData>({ userData: undefined, isLoading: true });

export const AuthContextProvider = (props: ProviderProps) => {
    const [ userData, setUserData ] = useState<UserType | undefined>();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = 12;
                const userData = await UserService.getUserById(userId);
                setUserData(userData);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [])

    const contextData = {
        userData: userData,
        isLoading: isLoading
    };

    return(
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;