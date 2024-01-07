import axios from "axios";

export class AuthenticationAPI{
    static host = 'http://localhost:8081';
    static headers = {
        'Content-type': 'application/json',
    };

    static async sign_in(payload){
        const endpoint = '/auth/sign_in';
        const response = await axios({
            url: this.host + endpoint,
            method: "post",
            headers: this.headers,
            data: payload,
            withCredentials: true,
        }).catch(function(error){
            console.log(error);
            return error;
        });
        return response;
    };

    static async sign_up(payload){
        const endpoint = '/auth/sign_up';
        const response = await axios({
            url: this.host + endpoint,
            method: "post",
            headers: this.headers,
            withCredentials: true,
            data: payload
        }).catch(function(error){
            return error.response
        });
        return response;
    };
}


// const headers = {
//     'Content-type': 'application/json'
// }

// export async function sign_in(payload){
//     const url = 'http://localhost:8081/auth/sign_in';
//     const response = await axios({
//         url: url,
//         method: "post",
//         headers: headers,
//         withCredentials: false,
//         data: payload
//     }).catch(function(error){
//         return error.response
//     });
//     return response;
// }
//
// export async function sign_up(payload){
//     const url = 'http://localhost:8081/auth/sign_up';
//     const response = await axios({
//         url: url,
//         method: "post",
//         headers: headers,
//         withCredentials: false,
//         data: payload
//     }).catch(function(error){
//         return error.response
//     });
//     return response;
// }