import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes, useHistory} from 'react-router-dom';
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import './variables.css';
import SalonProfile from './components/SalonProfile/SalonProfile';

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
            <span>Вы выбрали {master}</span>
            <Routes>
                
                <Route index element={<SalonProfile><ProductList /></SalonProfile>}/>
                <Route path={'/form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;
