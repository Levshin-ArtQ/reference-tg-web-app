import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes, useHistory} from 'react-router-dom';
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import './variables.css';
import SalonProfile from './components/SalonProfile/SalonProfile';
import MasterProfile from './components/MasterProfile/MasterProfile';
import ReservationForm from './components/ReservationForm/ReservationForm';
import ServiceWidget from './components/ServiceWidget/ServiceWidget'
import ClientHome from './pages/ClientHome';

function App() {
    const {onToggleButton, tg} = useTelegram();
    const queryParameters = new URLSearchParams(window.location.search);
    const master = queryParameters.get("master");
    console.log('master' + master);
    const {user, onClose} = useTelegram();

    useEffect(() => {
        tg.ready();
        
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={'/master'} element={<MasterProfile/>}/>
                <Route index element={<SalonProfile><ProductList /><ReservationForm></ReservationForm></SalonProfile>}/>
                <Route path={'/form'} element={<Form />}/>
                <Route path={'/home'} element={<ClientHome/>}></Route>
            </Routes>
        </div>
    );
}

export default App;

// git add .
// git commit -m "commit name"
// git push
