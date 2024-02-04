import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./pages/HomePage";
import StudiosPage from "./pages/Studios/StudiosPage";
import HallsPage from "./pages/Halls/HallsPage";
import PhotographersPage from "./pages/PhotographersPage";
import {AuthProvider} from "./context/AuthContext";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Authentication from "./pages/Authentication";

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route exact path="/" element={ <HomePage/> } />
                    <Route path="/authentication" element={ <Authentication/> } />
                    <Route path="/profile/me" element={ <Profile/> } />
                    <Route path="/news" element={ <News/> } />
                    <Route path="/studios" element={ <StudiosPage/> } />
                    <Route path="/halls" element={ <HallsPage/> } />
                    <Route path="/photographers" element={ <PhotographersPage/> } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}


export default App;