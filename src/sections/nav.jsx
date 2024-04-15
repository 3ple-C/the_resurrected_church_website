import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/images/TRC Blue logo 1.png';

import { useState } from 'react'

// components
import Dropdown from '../components/dropdown';
import Button from '../components/rtcBtn';

import { Link } from 'react-router-dom';

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

        <div className='lg:fixed w-full md:z-10'>
            <nav className={`${styles.navbar} ' py-3 xl:px-24 lg:px-16 md:px-12 sm:px-10 ' `}  >
                {/* logo */}

                <Link to='/' className={`${styles.logo}`}>
                    <div className=''>
                        <img src={logo} alt='logo' className='w-[50%] object-contain md:w-[100%]' />
                    </div>
                </Link>
                <ul className={`${styles.navMenu} 'gap-7 xl:gap-12 lg:gap-8 ' ${isActive ? styles.active : ''}`}>

                    <li onClick={removeActive}>
                        <Link to='/' className={`${styles.navLink} 'font-medium xl:text-base' `}>Home</Link>
                    </li>
                    <li >
                        <Link to='' className={`${styles.navLink}`}><Dropdown /></Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/live' className={`${styles.navLink}`}>Live</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/contact' className={`${styles.navLink}`}>Contact us</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/give' className={`${styles.navLink}`}><Button name="Give" /></Link>
                    </li>

                </ul>
                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar} 'w-[10px]' `}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;