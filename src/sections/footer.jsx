import '../assets/css/main.css'
import logo from '../assets/images/TRC Official 3 1.png';


// components
import DropdownFooter from '../components/dropdownFooter';


const Footer = () => {
    return (
        <footer className='relative mt-60 '>

            {/* <div>hello</div> */}
            <section className='rounded-md absolute left-0 right-0 my-0 mx-auto bg-[#01385F] w-[90%] lg:w-[70%] md:w-[72%] text-white text-center pt-14 pb-28 space-y-[60px] top-[-33%] lg:space-y-[90px] md:space-y-[70px] md:pt-20 md:pb-32 lg:top-[-40%] md:top-[-42%] sm:top-[-32%]'>
                <div>
                    <h3 className='text-2xl lg:text-[40px] md:text-[30px] font-semibold pb-1.5'>Join Our Mailing List</h3>
                    <p className='text-sm w-[85%] mx-auto lg:w-[60%] lg:text-base md:text-sm md:w-[75%] sm:mx-auto  font-[500]'>Stay connected and up-to-date with all the latest news, events, and inspirational messages by joining our mailing list today!</p>
                </div>

                <form action="" className='space-y-4 md:space-x-3 md:space-y-0'>
                    <input type="email" placeholder='Enter Email Address' className='p-4 w-[90%] form-input bg-transparent border-[#CCCCCC] rounded lg:p-5 sm:p-4 lg:w-[55%] md:w-[55%] ' />
                    <input type="submit" value={'Subscribe'} className='subscribe py-4 bg-white text-sm text-[#01385F] md:text-base lg:py-5 lg:px-10 sm:py-4 sm:px-5 font-semibold rounded' />
                </form>
            </section>

            <div className='bg-black space-y-24 md:space-y-14'>
                <section className='mb-0 pt-[17rem] lg:pt-[17rem] md:pt-[16rem] px-3 space-y-12 bg-black text-white md:pb-10 md:flex md:justify-between md:items-center xl:px-14 lg:px-6 md:px-7'>
                    <div className='flex flex-col md:w-1/4 md:items-center '>
                        <div className=' w-1/3 md:w-2/3 lg:w-2/3'>
                            <a href="/"> <img src={logo} alt='logo' className='object-contain w-full' /></a>
                        </div>
                        <p className='logo_text xl:text-base lg:text-normal sm:text-[11px]'>Manifesting the Resurrected life......</p>
                    </div>

                    <div className=' md:block p-1'>
                        <ul className='flex flex-col gap-5 lg:pe-10 md:pe-5  md:flex-row md:items-center md:gap-6 xl:gap-10 lg:gap-7'>
                            <li><a href="/" className='text-white'>Home</a></li>
                            <li className='text-white'><DropdownFooter /></li>
                            <li><a href='/' className='text-white'>Live</a></li>
                            <li><a href='/' className='text-white'>Contact us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className=' xl:text-base lg:text-sm sm:text-xs pb-1'>Follow us on</h3>

                        <div className='space-x-7 xl:space-x-[48px] xl:text-2xl md:text-normal lg:space-x-[40px] md:space-x-[30px] pt-1'>
                            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                            <a href="/"><i class="fa-brands fa-facebook text-white"></i></a>
                            <a href="/"><i class="fa-brands fa-youtube"></i></a>
                            <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="/"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                </section>

                <p className='text-center pb-5 bg-black text-white mt-0 lg:text-base md:text-sm'>© All rights reserved 2024,The Resurrected Church</p>
            </div>
        </footer>
    );
};


export default Footer;