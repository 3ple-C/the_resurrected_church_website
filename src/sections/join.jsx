
import '../assets/css/main.css'

// images
import logo from '../assets/images/TRC Official 3 1.png'

// component
import Button from '../components/rtcBtn';

import { Link } from 'react-router-dom';

const Join = () => {
    return (
        <section className='joinSection py-4 w-full flex flex-col pt-16 pb-40 gap-14 xl:py-40 lg:pt-[9rem] lg:pb-40 md:pt-24 md:pb-32 md:flex-row md:gap-2 md:px-20'>
            <div className='w-[100%] px-4 space-y-4 xl:w-[50%] xl:space-y-8 lg:w-[50%] lg:space-y-4 md:order-2 md:w-[50%] md:px-1.5 md:py-0.5 md:space-y-4'>
                <h1 className='text-xl font-bold xl:text-[28px] lg:text-[24px] md:text-lg text-center md:text-start' >Join Our Faith Family</h1>

                <p className=' md:pt-0 font-medium leading-6 text-center xl:leading-8  text-[16px] md:text-justify'>
                    Become part of a vibrant community of believers who are passionate about growing in faith, serving others, and journeying together in Christ. Whether you're new to the faith or seeking deeper connections, you'll find friendship, support, and opportunities to serve in our welcoming community. Join us as we learn, worship, and share God's love with one another and the world around us."
                </p> <br />

                {/* <div className=''>
                    <a href='/' className='bg-[#01385F] block w-[45%] mx-auto rounded-md text-sm px-5 py-4 text-center text-white xl:w-2/6  xl:px-6 xl:py-4 lg:w-[40%] lg:px-4 lg:py-5 md:w-[51%] md:mt-3.5 md:mx-0 md:py-5 md:px-6 sm:px-10 sm:py-2.5'></a>
                </div> */}

                <Link to='/member' className='pt-10'><Button name="Join Community"/></Link>
            </div>

            <div className='joinSectionImg rounded-lg w-[90%] mx-auto md:w-1/2 md:mx-0 md:order-2 px-4 md:px-1'>
                <div className='flex flex-col w-[100%] py-24 h-full items-center justify-center align-middle md:py-0'>
                    <div className=' w-1/3 md:w-[40%] '>
                        <a href="/"> <img src={logo} alt='logo' className='object-contain w-full mx-auto lg:mt-[-20px]' /></a>
                    </div>
                    <p className='logo_text text-sm text-white lg:mt-[-30px] xl:text-base md:mt-[-20px] lg:text-normal sm:text-[11px]'>Manifesting the Resurrected life......</p>
                </div>
            </div>
        </section>
    );
};

export default Join