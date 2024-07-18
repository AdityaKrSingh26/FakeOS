import React, { useEffect, useState } from 'react';

const SelectCountry = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <select onChange={e => onCountryChange(e.target.value)}>
      <option value="">Select a country</option>
      {countries.map(country => (
        <option key={country.countryCode} value={country.countryCode}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCountry;
