import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./pages/HomePage";
import StudiosPage from "./pages/Studios/StudiosPage";
import {AuthProvider} from "./context/AuthContext";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import StudioPage from "./pages/Studio/StudioPage";

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    {/*<Route path="/authentication" element={ <Authentication/> } />*/}
                    {/*<Route path="/profile/me" element={ <Profile/> } />*/}
                    {/*<Route path="/news" element={ <News/> } />*/}
                    <Route path="/studios" element={<StudiosPage/>}/>
                    <Route path="studio/:slug" element={<StudioPage/>}/>
                    {/*<Route path="/halls" element={ <HallsPage/> } />*/}
                    {/*<Route path="/photographers" element={ <PhotographersPage/> } />*/}
                </Routes>
            </Router>
        </AuthProvider>
    );
}


export default App;