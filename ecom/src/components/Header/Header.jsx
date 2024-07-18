import React from 'react'
import Carousel from './Caraousel'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'

import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <img src={Image1} alt="Image1" />
        </div>
    )
}

export default Header