import image1 from '../assets/images/Frame 1611.png';
import image2 from '../assets/images/Frame 1612.png';
import image3 from '../assets/images/Frame 1613.png';

// components
import Slider from '../components/slider';
import Button from '../components/rtcBtn';
import Image from '../components/rtcImg';

const Service = () => {

    return (
        <section className='w-full flex flex-col pt-7 gap-14 md:flex-row md:gap-2 md:px-20 md:pt-24 xl:pt-32 lg:pt-28 '>
            <div className='order-1 hidden md:flex gap-3'>
                <Image src={image1} />
                <Image src={image2} />
                <Image src={image3} />
            </div>

            <div className='order-1'>
                <Slider />
            </div>

            <div className='md:order-2 px-4 pb-6 space-y-3 xl:w-[52%] xl:space-y-6 lg:w-[80%] md:w-[100%] md:px-3 md:space-y-1.5 md:pb-0 '>
                <h1 className='text-xl leading-10 font-bold xl:text-[28px] lg:text-[24px] md:text-lg text-center md:text-start' >Serving God's Kingdom with our finance.</h1>

                <p className='text-[16px] pb-6 leading-6 text-center xl:leading-8 xl:text-[16px] lg:leading-6 lg:text-xs md:text-start md:text-[10px] md:leading- md:pb-3'>Scripture reminds us in 2 Corinthians 9:7, 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.' Your giving isn't just about finances; it's an act of service to God and His kingdom, reflecting His abundant love and grace. As you give generously, you're partnering with us in fulfilling God's mission and spreading His love to the world."</p>

                <div className='text-center md:text-start'>
                    <Button name="Give" />
                </div>
            </div>

        </section>
    );
};

export default Service;