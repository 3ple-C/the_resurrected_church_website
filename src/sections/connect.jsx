import facebook from '../assets/images/simple-icons_facebooklive.png';
import instagram from '../assets/images/Frame 1584.png';
import telegram from '../assets/images/Frame 1585.png';
import youtube from '../assets/images/logos_youtube.png';

import '../assets/css/main.css';


const Connect = () => {
    return (
        <section className='space-y-6 mt-14 xl:mt-30 lg:mt-28 md:mt-24 xl:space-y-24 md:space-y-16 mb-14 xl:mb-30 lg:mb-28 md:mb-24'>
            <div className='text-center space-y-3 xl:w-[45%] lg:w-[60%] lg:space-y-4 md:w-4/6 mx-auto'>
                <h1 className='px-2 lg:text-[28px] md:text-2xl font-bold'>Connect with us on various channels.</h1>
                <p className='font-medium text-xs px-4 sm:text-base'>Stay connected across platforms. Follow us for updates, events, and inspiration on all our social media channels."</p>
            </div>

            <div className='connect_img w-11/12 lg:w-4/6 md:w-5/6 mx-auto flex justify-between items-center'>
                <img src={youtube} alt="rtc_youtube" />
                <img src={instagram} alt="rtc_instagram" />
                <img src={telegram} alt="rtc_telegram" />
                <img src={facebook} alt="rtc_facebook" />
            </div>
        </section>
    );
};

export default Connect;