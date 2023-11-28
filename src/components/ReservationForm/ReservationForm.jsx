import React from 'react';
import PropTypes from 'prop-types';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const ReservationForm = () => {
    
    return (
        <div>
        <AddToCalendarButton
            name="Title"
            options={['Apple','Google']}
            location="World Wide Web"
            startDate="2023-12-01"
            endDate="2023-12-01"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
        ></AddToCalendarButton>
            
        </div>
    );
};

ReservationForm.propTypes = {};

export default ReservationForm;
