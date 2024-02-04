import {instance} from "./AxiosInstance"
import {sha256} from "js-sha256";
import Cookies from "js-cookie";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";



export class AuthenticationAPI {

    static async sign_in(payload) {
        let response = null;
        await instance.post("/auth/sign_in", {"email": payload.email, "password": sha256(payload.password)}).then((r) => {
            // console.log(response.data);
            localStorage.setItem('access_token', r.data.access_token);
            Cookies.set('refresh_token', r.data.refresh_token);
            response = r;
        }).catch((r) => {
            console.log(r);
            response = r;
        });
        return response;
    };

    static async logout(){
        localStorage.removeItem('access_token');
        Cookies.remove('refresh_token');
    }
}