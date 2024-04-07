
import '../assets/css/main.css'


// components
// import Image from '../components/rtcImg';


const Header = (props) => {
    return (
        <header className='mb-10 xl:pt-[9.7rem] lg:pt-[9.7rem] md:pt-'>
            <div className='desktop'>
                <img src={props.src} alt="rtc_messages" className='object-cover w-full' />
            </div>

            <div className='mobile'>
                <img src={props.src2} alt="rtc_messages" className='object-cover w-full' />
            </div>
        </header>
    )
}

export default Header;