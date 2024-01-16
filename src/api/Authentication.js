import {instance} from "./AxiosInstance"
import {sha256} from "js-sha256";
import Cookies from "js-cookie";



export class AuthenticationAPI {

    static async sign_in(payload) {
        payload.password = sha256(payload.password);
        await instance.post("/auth/sign_in", payload).then((response) => {
            console.log(response.data);
            localStorage.setItem('access_token', response.data.access_token);
            Cookies.set('refresh_token', response.data.refresh_token);
            return response;
        }).catch((response) => {
            console.log(response);
            return response;
        });

    }
}