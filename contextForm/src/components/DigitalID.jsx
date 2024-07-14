import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import styles from './DigitalID.module.scss';

const DigitalID = () => {
    const { formData } = useContext(FormContext);

    if (!formData) {
        return <div></div>;
    }

    const { username, email, stateCode, photo } = formData;
    const stateStyle = getStateStyle(stateCode);

    return (
        <div className={`${styles.digitalID} ${stateStyle}`}>
            <div className={styles.photo}>
                {photo ? <img src={photo} alt="User Photo" /> : <div className={styles.placeholder}>No Image</div>}
            </div>
            <div className={styles.details}>
                <h2>{username}</h2>
                <p>{email}</p>
                <p>{stateCode}</p>
            </div>
        </div>
    );
};

const getStateStyle = (stateCode) => {
    switch (stateCode) {
        case 'NSW':
            return styles.nsw;
        case 'VIC':
            return styles.vic;
        case 'QLD':
            return styles.qld;
        // Add other state styles here
        default:
            return '';
    }
};

export default DigitalID;
