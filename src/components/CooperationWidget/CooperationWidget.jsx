import React from 'react';
import './CooperationWidget.css'

const CooperationWidget = ({group_booking}) => {
    const booked = group_booking.count1;
    const payed = group_booking.count2;
    const master_type = group_booking.master_type;
    const master_name = group_booking.master_name;
    const address = group_booking.address
    const time = group_booking.time;

    return (
        <div className='coop_widget dfc'>
            <div className="group_header header">Групповая запись</div>
            <div className="stat"><span className="book_count">Записалось: {booked}</span><span className="book_count">Оплатитили: {payed}</span></div>
            <div className="span widget_item">{master_type} {master_name} пртедет по адресу: {address}</div>
            <span className="time">{time}</span>
            
        </div>
    );
};

export default CooperationWidget;