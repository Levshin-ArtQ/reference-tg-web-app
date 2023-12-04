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
                    {user?.first_name} {user?.last_name} 
                </span>
                <div className="user_icon round_icon df"><span style={{margin: 'auto'}}>{user?.username.charAt(0)}</span></div>
        </div>
    );
};

export default Header;
