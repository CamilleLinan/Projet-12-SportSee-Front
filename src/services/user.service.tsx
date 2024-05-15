/* eslint-disable react-refresh/only-export-components */
import mockData from "../../public/mocked-data.json";
import axios from "axios";
import { User } from "../models/user.model";
import { Activity } from "../models/activity.model";
import { Performance } from "../models/performance.model";
import { AverageSession } from "../models/averageSession.model";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ENV = process.env.REACT_APP_ENV;

const getUserById = async (userId: number): Promise<User | undefined> => {
    if (ENV === "development") {
        const user = mockData.USER_MAIN_DATA.find((user) => user.id === userId);
        return user ? Promise.resolve(user) : Promise.reject(undefined);
    } else {
        try {
            const response = await axios.get(`${BASE_URL}/user/${userId}`);
            const userData = response.data.data;
            return userData;
        } catch (error) {
            console.log('unknow user', error);
            return undefined;
        }
    }
}

const getUserActivity = async (userId: number): Promise<Activity | undefined> => {
    if (ENV === "development") {
        const activity = mockData.USER_ACTIVITY.find((activity) => activity.userId === userId);
        return activity ? Promise.resolve(activity) : Promise.reject(undefined);
    } else {
        try {
            const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
            return response.data.data;
        } catch (error) {
            console.log('Unknown user', error);
            throw error;
        }
    }
}

const getUserPerformance = async (userId: number): Promise<Performance | undefined> => {
    if (ENV === "development") {
        const performance = mockData.USER_PERFORMANCE.find((performance) => performance.userId === userId);
        return performance ? Promise.resolve(performance) : Promise.reject(undefined);
    } else {
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
}

const getUserAverageSessions = async (userId: number): Promise<AverageSession | undefined> => {
    if (ENV === "development") {
        const averageSessions = mockData.USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === userId);
        return averageSessions ? Promise.resolve(averageSessions) : Promise.reject(undefined);
    } else {
        try {
            const response = 
                await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
                const userAverageSessionsData = response.data.data;
            return userAverageSessionsData;
        } catch (error) {
            console.log('unknow user', error);
            return undefined;
        }
    }
}

export default { getUserById, getUserActivity, getUserPerformance, getUserAverageSessions };