import React from 'react';
import { Children } from 'react';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import './SalonProfile.css';


const SalonProfile = ({ children }) => {
    return (
        <>
            <div className='salon_wallpaper'>
                <div className='slogan'>Влюбим тебя в свою красоту и качество с первого взгляда</div> 
            </div>
            <div className='menu_options'>
                <Link className='booking_button button' to='/form'>Записаться</Link>
                <Button>Позвонить</Button>
                <Button>Поделиться</Button>
            </div>
            {children}

        </>

    );
};


export default SalonProfile;