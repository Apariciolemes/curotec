import axios from "./config";

interface PayloadAuthLogin {
    username: string;
    password: string;
}

export async function authLogin(payload: PayloadAuthLogin) {
    const response = await axios.post("auth/login", payload);
    return response.data
}

