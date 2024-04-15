
// css
import '../assets/css/main.css';
import grooming from '../assets/images_new/Frame 57(1).png';
import veterinary from '../assets/images_new/Frame 57_1.png';
import supplies from '../assets/images_new/Frame 57.png';

// components
// import Slider2 from '../components/slider2';
import Services from '../components/service';


const Connect = () => {
    return (
        <section className='space-y-12 mt-14 xl:mt-30 lg:mt-28 md:mt-24 xl:space-y-16 md:space-y-16 mb-14 xl:mb-30 lg:mb-28 md:mb-24'>
            <div className='text-center space-y-2.5 xl:w-[] lg:w-[60%] lg:space-y-10 md:w-4/6 mx-auto'>
                <h2 className='px-2 lg:text-[38px] md:text-2xl font-'>Our Services</h2>
                <p className='font-medium text-sm px-4 sm:text-base'>Explore our comprehensive services tailored to every stage of your dog ownership journey. From adoptions to grooming and training, we're here to support you and your beloved canine companion every step of the way.</p>
            </div>

            <div className='w-full flex flex-col gap-10 welcome md:flex-row md:gap-6 md:px-14 xl:px-20 xl:gap-8'>
                <Services src={grooming} heading="Dog Grooming" text="Indulge your furry friend with our professional dog grooming services. From baths to trims, our experienced groomers will pamper your pup, leaving them looking and feeling their best."/>
                <Services src={veterinary} heading="Veterinary Services" text="Ensure your dog's well-being with our top-notch veterinary care services. From routine check-ups to specialized treatments, our skilled veterinarians are dedicated to keeping your furry friend healthy."/>
                <Services src={supplies} heading="Pet Accessories & Supplies" text="Elevate your dog's style and comfort with our premium pet accessories and supplies. From stylish collars to cozy beds and interactive toys, we offer everything your furry friend needs to live their best life."/>

            </div>

        </section>
    );
};

export default Connect;