
import '../assets/css/main.css';

// components
import Text from '../components/textcontainer';
import HeadText from '../components/headText';

const Services = (props) => {
    const headText = "ABOUT US";
    const subHeadText = "Matching Paws with Loving Homes Worldwide";
    const text = "Indulge your furry friend with our professional dog grooming services. From baths to trims, our experienced groomers will pamper your pup, leaving them looking and feeling their best. ";

    return (
        <section className=''>
            <div className=' px-4 space-y-3 xl:space-y-4 lg:space-x- md:w-[100%] md:px-4 xl:px-2 md:space-y-2  md:order-2' id='welcome_text'>
                <div>
                    <img src={props.src} alt="" />
                </div>
                <h2 className='xl:text-[24px] lg:text-xl xl:leading-[32px] md:text-[20px] leading-[28px] text-[18px] font-semibold m-0'>{props.heading}</h2>

                <div className='text-sm pb-8'>
                    <Text content={props.text} />
                </div>
            </div>
        </section>
    );
};


export default Services;