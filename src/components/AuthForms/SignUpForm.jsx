import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({role: '', email: '', password_1: '', password_2: ''});

    const handleSignUpFormChange = (e) => {
        setSignUpData({...signUpData, [e.target.name]: e.target.value});
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        if(signUpData.role === 'none' || signUpData.role === ''){
            console.log('Амплуа не выбрано');
        }

        if(signUpData.password_1 !== signUpData.password_2){
            console.log('Пароли не совпадают');
        }
        console.log('Sign In:', signUpData);
    };

    return (
        <Form>
            <Form.Group className="mt-3">
                <Form.Label>Амплуа</Form.Label>
                <Form.Select name="role"
                             onChange={handleSignUpFormChange}>
                    <option value="none">Не выбрано</option>
                    <option value="client">Я клиент</option>
                    <option value="photographer">Я фотограф</option>
                    <option value="studio">Я владелец студии</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Введите E-mail"
                    name="email"
                    onChange={handleSignUpFormChange}/>
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    name="password_1"
                    onChange={handleSignUpFormChange}/>
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>Подтверждение пароля</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Введите пароль повторно"
                    name="password_2"
                    onChange={handleSignUpFormChange}/>
            </Form.Group>
            <Button onClick={handleSignUp} variant="warning" type="submit" className="my-3 w-100">
                Зарегистрироваться
            </Button>
        </Form>
    );
}

export default SignUpForm;