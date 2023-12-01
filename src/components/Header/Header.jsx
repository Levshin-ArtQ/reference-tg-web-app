import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

// <Button onClick={onClose}>Закрыть</Button>
const Header = () => {
    const {user, onClose} = useTelegram();
    const navigate = useNavigate();

    return (
        <div className={'header'}>
        <button onClick={() => navigate(-1)}>{'< Назад'}</button>
            
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
