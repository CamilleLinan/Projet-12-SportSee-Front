import axios from "axios";
import { User } from "../modeles/user.modele";
import { Activity } from "../modeles/activity.modele";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getUserById = async (userId: number): Promise<User | undefined> => {
    try {
        const response = 
            await axios.get(`${BASE_URL}/user/${userId}`);
            const userData = response.data.data;
        return userData;
    } catch (error) {
        console.log('unknow user', error);
        return undefined;
    }
}

const getUserActivity = async (userId: number): Promise<Activity | undefined> => {
    try {
        const response = 
            await axios.get(`${BASE_URL}/user/${userId}/activity`);
            const userActivityData = response.data.data;
            console.log(response);
        return userActivityData;
    } catch (error) {
        console.log('unknow user', error);
        return undefined;
    }
}

export default { getUserById, getUserActivity };