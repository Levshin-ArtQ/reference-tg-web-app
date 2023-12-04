import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import { FaAngleLeft } from "react-icons/fa";
import './Header.css';

// <Button onClick={onClose}>Закрыть</Button>
const Header = () => {
    const {user, onClose} = useTelegram();
    const navigate = useNavigate();

    return (
        <div className={'header'}>
        <Button className={'backbutton'} onClick={() => navigate(-1)}><FaAngleLeft className='backicon'/></Button>
            
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
