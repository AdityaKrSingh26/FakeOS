import React from 'react';

const HolidayCard = ({ holiday }) => {
    return (
        <div className="holiday-card">
            <h3>{holiday.name}</h3>
            <p>{holiday.date}</p>
            <p>{holiday.localName}</p>
        </div>
    );
};

export default HolidayCard;
