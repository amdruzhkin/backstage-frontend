import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const SignInForm = () => {
    const [signInData, setSignInData] = useState({email: '', password: ''});


    const handleSignInFormChange = (e) => {
        setSignInData({...signInData, [e.target.name]: e.target.value});
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        console.log('Sign In:', signInData);
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
            <Button onClick={handleSignIn} variant="warning" type="submit" style={{width: "100%"}} className="mt-3">
                Войти
            </Button>
        </Form>
    );
}

export default SignInForm;