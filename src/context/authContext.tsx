import { createContext, useEffect, useState } from "react"
import UserService from "../services/user.service";
import { User } from "../models/user.model";
import { AverageSession } from "../models/averageSession.model";
import { Performance } from "../models/performance.model";
import { Activity } from "../models/activity.model";

interface UserData {
    userData: User | undefined;
    userActivity: Activity | undefined;
    userAverageSession: AverageSession | undefined;
    userPerformance: Performance | undefined;
    error: boolean;
    isLoading: boolean;
}

interface ProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<UserData>({ 
    userData: undefined, 
    userActivity: undefined, 
    userAverageSession: undefined, 
    userPerformance: undefined, 
    error: false, isLoading: true });

export const AuthContextProvider = (props: ProviderProps) => {
    const [ userData, setUserData ] = useState<User | undefined>();
    const [ userActivity, setUserActivity ] = useState<Activity | undefined>();
    const [ userAverageSession, setUserAverageSession ] = useState<AverageSession | undefined>();
    const [ userPerformance, setUserPerformance ] = useState<Performance | undefined>();
    const [ error, setError ] = useState<boolean>(false);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const userId = 12;

        const fetchUserData = async () => {
            try {
                const userData = await UserService.getUserById(userId);
                setUserData(userData);
                if (!userData) {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchUserActivity = async () => {
            try {
                const userActivity = await UserService.getUserActivity(userId);
                setUserActivity(userActivity);
                if (!userActivity) {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchUserAverageSession = async () => {
            try {
                const userAverageSessionData = await UserService.getUserAverageSessions(userId);
                setUserAverageSession(userAverageSessionData);
                if (!userAverageSessionData) {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchUserPerformance = async () => {
            try {
                const userPerformanceData = await UserService.getUserPerformance(userId);
                setUserPerformance(userPerformanceData);
                if (!userPerformanceData) {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
        fetchUserActivity();
        fetchUserAverageSession();
        fetchUserPerformance();
    }, [])

    const contextData = {
        userData: userData,
        userActivity: userActivity,
        userAverageSession: userAverageSession,
        userPerformance: userPerformance,
        error: error,
        isLoading: isLoading
    };

    return(
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;