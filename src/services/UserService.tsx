import axios from "axios";
import { User } from "../models/user.model";
import { Activity } from "../models/activity.model";
import { Performance } from "../models/performance.model";

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
        return userActivityData;
    } catch (error) {
        console.log('unknow user', error);
        return undefined;
    }
}

const getUserPerformance = async (userId: number): Promise<Performance | undefined> => {
    try {
        const response = 
            await axios.get(`${BASE_URL}/user/${userId}/performance`);
            const userPerformanceData = response.data.data;
        return userPerformanceData;
    } catch (error) {
        console.log('unknow user', error);
        return undefined;
    }
}

export default { getUserById, getUserActivity, getUserPerformance };