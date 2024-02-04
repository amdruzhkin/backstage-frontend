import React, {useContext, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {AuthenticationAPI} from "../../api/Authentication";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const SignInForm = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [signInData, setSignInData] = useState({email: '', password: ''});
    const navigator = useNavigate();


    const handleSignInFormChange = (e) => {
        setSignInData({...signInData, [e.target.name]: e.target.value});
    };

    async function handleSignIn(e) {
        e.preventDefault();
        await AuthenticationAPI.sign_in(signInData).then((response) => {
            if(response.status === 200){
                setIsAuth(true);
                navigator('/');
                window.location.reload();
            }
            //
        });
        // console.log('Sign In:', signInData);
    };

    return (
        <Form>
            <Form.Group className="mt-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Введите E-mail"
                    name="email"
                    value={signInData.email}
                    onChange={handleSignInFormChange}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    name="password"
                    value={signInData.password}
                    onChange={handleSignInFormChange}
                />
            </Form.Group>
            <Button onClick={handleSignIn} variant="warning" type="submit" className="my-3 w-100">
                Войти
            </Button>
        </Form>
    );
}

export default SignInForm;