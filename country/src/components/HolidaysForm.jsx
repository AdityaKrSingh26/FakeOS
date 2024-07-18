import React, { useState } from 'react';
import SelectCountry from './SelectCountry';
import HolidayCard from './HolidayCard';

const HolidaysForm = () => {
    const [year, setYear] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [holidays, setHolidays] = useState([]);

    const fetchHolidays = async (e) => {
        e.preventDefault();
        if (year && countryCode) {
            try {
                const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`);
                const data = await response.json();
                setHolidays(data);
            } catch (error) {
                console.error('Error fetching holidays:', error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={fetchHolidays}>
                <div>
                    <label>Year:</label>
                    <input
                        type="number"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        placeholder="Enter year"
                    />
                </div>
                <div>
                    <SelectCountry onCountryChange={setCountryCode} />
                </div>
                <button type="submit">Get Holidays</button>
            </form>

            <div>
                {holidays.map(holiday => (
                    <HolidayCard key={holiday.date} holiday={holiday} />
                ))}
            </div>
        </div>
    );
};

export default HolidaysForm;
