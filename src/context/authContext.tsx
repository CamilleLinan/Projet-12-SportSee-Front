import { createContext, useEffect, useState } from "react"
import { User } from "../modeles/user.modele";
import UserService from "../services/UserService";

interface UserData {
    userData: User | undefined;
    isLoading: boolean;
}

interface ProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<UserData>({ userData: undefined, isLoading: true });

export const AuthContextProvider = (props: ProviderProps) => {
    const [ userData, setUserData ] = useState<User | undefined>();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = 18;
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