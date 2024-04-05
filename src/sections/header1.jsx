
import '../assets/css/main.css'
import HeaderImg from '../assets/images/Frame 1567.png';
import HeaderImg2 from '../assets/images/Frame 1659.png';

// components
// import Image from '../components/rtcImg';


const Header = () => {
    return (
        <header className='mb-10'>
            <div className='desktop'>
                <img src={HeaderImg} alt="rtc_messages" className='object-contain ' />
            </div>

            <div className='mobile'>
                <img src={HeaderImg2} alt="rtc_messages" className='object-cover w-full' />
            </div>
        </header>
    )
}

export default Header;