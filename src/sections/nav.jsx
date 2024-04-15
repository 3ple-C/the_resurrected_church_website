import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/images_new/Logo 2.png';

import { useState } from 'react'

// components
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
            <nav className={`${styles.navbar} '  justify-between md:justify-center py-5 mb-[-2px] xl:px-24 lg:px-16 md:px-12 sm:px-10 ' `}  >
                {/* logo */}

                <Link to='/' className={`${styles.logo} md:hidden`}>
                    <div className='w-fit'>
                        <img src={logo} alt='logo' className='w-[52%] object-contain md:w-[100%]' />
                    </div>
                </Link>
                <ul className={`${styles.navMenu} 'gap-7 xl:gap-12 lg:gap-8 ' ${isActive ? styles.active : ''}`}>

                    <li onClick={removeActive}>
                        <Link to='/' className={`${styles.navLink} 'font-medium xl:text-base' `}>About Us</Link>
                    </li>
                    <li >
                        <Link to='' className={`${styles.navLink}`}>Our Services</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/live' className={`${styles.navLink}`}>Contact Us</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/contact' className={`${styles.navLink}`}>FAQ's</Link>
                    </li>
                    <li onClick={removeActive} className='md:hidden'>
                        <Link to='/give' className={`${styles.navLink}`}><Button name="Give" /></Link>
                    </li>

                </ul>

                {/* <div className='hidden md:block  '>
                    <Link to='/give' className={`${styles.navLink}`}><Button name="SHOP NOW" /></Link>
                </div> */}

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