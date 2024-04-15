
import '../assets/css/main.css';

// components
import Button from '../components/rtcBtn';
import bottom_img from '../assets/images_new/Pexels Photo by Nancy Guth.png';
import bottom_mobile from '../assets/images_new/Pexels Photo by Nancy Guth (2).png'
// import logo from '../assets/images/TRC Official 3 1.png'

const Header2 = () => {
    return (
        <div className='header2 relative w-full pt-1 pb-[0px] md:pt-10 md:pb-[198px] px-4 md:px-1'>
            <div className=' flex flex-col text-center gap-6  md:gap-8 w-[100%] lg:pb-[] md:w-[48%] md:mx-auto h-[88vh] md:h-screen items-center justify-center align-middle'>

                <h2 className='text-white text-[26px] px-8 md:px-0 leading-[32px] lg:text-[54px] lg:leading-[64px]'>Your Journey to Puppy Love Starts at <span className='text-[#F8931F]'>Petshop.</span></h2>

                <p className=' text-white text-sm md:mt-[-35px] xl:text-[16px] lg:px-[40px] lg:pt-8 lg:text-normal sm:text-[14px]'>Welcome to Petshop, your premier destination for finding your new furry family member. Discover a wide selection of dogs ready to bring joy and love into your home today.</p>

                <Button name="SHOP NOW" />


            </div>

            <div className='absolute bottom-0 w-[58%] start-[50%] translate-x-[-50%] pt-12'>
                <img src={bottom_img} alt="pet shop" className='hidden md:block  object-contain' />
                <img src={bottom_mobile} alt="pet shop" className='md:hidden object-contain' />
            </div>

        </div>
    );
};

export default Header2;