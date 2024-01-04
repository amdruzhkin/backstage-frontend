// In App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import HomePage from "./pages/HomePage";
import StudiosPage from "./pages/StudiosPage";
import HallsPage from "./pages/HallsPage";
import PhotographersPage from "./pages/PhotographersPage";
import {AuthContext} from "./context/AuthContext";
import Profile from "./pages/Profile";


function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route exact path="/" element={ <HomePage/> } />
                    <Route path="/profile" element={ <Profile/> } />
                    <Route path="/studios" element={ <StudiosPage/> } />
                    <Route path="/halls" element={ <HallsPage/> } />
                    <Route path="/photographers" element={ <PhotographersPage/> } />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;