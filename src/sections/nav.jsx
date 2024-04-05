import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/images/TRC Blue logo 1.png';

import { useState } from 'react'

// components
import Dropdown from '../components/dropdown';
import Button from '../components/rtcBtn';

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }
    return (

        <div className=''>
            <nav className={`${styles.navbar} 'xl:px-24 lg:px-16 md:px-12 sm:px-10 py-3 px-4' `}  >
                {/* logo */}

                <a href='#home' className={`${styles.logo}`}>
                    <div className=' w-'>
                        <img src={logo} alt='logo' className='w-[50%] object-contain md:w-[100%]' />
                    </div>
                </a>
                <ul className={`${styles.navMenu} 'gap-7 xl:gap-12 lg:gap-8' ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink} 'font-medium xl:text-base' `}>Home</a>
                    </li>
                    <li >
                        <a href='#home' className={`${styles.navLink}`}><Dropdown /></a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink}`}>Live</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink}`}>Contact us</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink}`}><Button name="Give" /></a>
                    </li>
                </ul>
                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;