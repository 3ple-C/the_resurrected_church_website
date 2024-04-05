
import '../assets/css/main.css';

// components
import logo from '../assets/images/TRC Official 3 1.png'

const Header2 = () => {
    return (
        <div className='header2 w-full pt-14 pb-[80px] mt-14 xl:mt-30 lg:mt-28 md:mt-24 md:pt-10 md:pb-[68px] px-4 md:px-1'>
            <div className='flex flex-col w-[100%] h-full items-center justify-center align-middle'>
                <div className='w-[40%]  lg:w-[22%] md:w-[28%]'>
                    <a href="/"> <img src={logo} alt='logo' className='object-contain w-full mx-auto ' /></a>
                </div>
                <p className='logo_text text-white md:mt-[-35px] xl:text-[20px] lg:text-normal sm:text-[11px]'>Manifesting the Resurrected life......</p>
            </div>
        </div>
    );
};

export default Header2;