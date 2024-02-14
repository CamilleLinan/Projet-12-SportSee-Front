import axios from "axios";
import { UserType } from "../types/UserType";

const getUserById = async (userId: number): Promise<UserType | undefined> => {
    try {
        const response = 
            await axios.get(`http://localhost:3000/user/${userId}`);
            const userData = response.data.data;
        return userData;
    } catch (error) {
        console.log('unknow user', error);
        return undefined;
    }
}

export default { getUserById };