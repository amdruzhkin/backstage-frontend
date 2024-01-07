import {createContext, useEffect, useState} from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = Cookies.get('refresh_token');
        if (token) {
            setIsAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    );
};