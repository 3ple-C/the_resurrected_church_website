// Messages Image
import grace2 from '../assets/images/Frame 1590 (1).png';
import faithWarfare from '../assets/images/Frame 1590.png';
import delivered from '../assets/images_new/Frame 16.png';
import grace1 from '../assets/images/Frame 1589 (1).png';
import bloodline from '../assets/images/Frame 1591.png';
import assurance from '../assets/images/Frame 1592.png';
import healing from '../assets/images/Frame 1591 (1).png';
import labors from '../assets/images/Frame 1592 (1).png'


// components
import { Message } from '../components/message';
import HeadText from '../components/headText';
import Button from '../components/rtcBtn';


const Messages = () => {
    return (
        <div>
            <section className='space-y-12 pt-16 xl:space-y-20 md:space-y-16 xl:pt-30 lg:pt-28 md:pt-24 pb-6'>
                <div className='text-center lg:text-start space-y-3 lg:space-y-4 lg:px-[6rem]'>
                    <HeadText title="Explore" subtitle="Explore Our Canine Companions" />
                    <p className='font-medium text-sm px-3 lg:px-0 sm:text-base lg:pt-2 lg:w-[60%]'>Discover your future furry friend! Browse our selection of lovable dogs ready for adoption or purchase. Your perfect match awaits!</p>
                </div>

                <div className=' messages mx-auto flex flex-wrap justify-center px-2 gap-3' id='messages'>
                    <Message src={delivered} name="Caucasian Shepherds" />
                    <Message src={faithWarfare} name="Faith Warfare" />
                    <Message src={bloodline} name="The Bloodline Blessings" />
                    <Message src={assurance} name="Assurance of Faith" />
                    <Message src={grace1} name="Grace & Consecrations 1" />
                    <Message src={grace2} name="Grace & Consecrations 2" />
                    <Message src={healing} name="Healing in the Atonement" />
                    <Message src={labors} name="Spiritual Labour" />
                </div>
            </section>

            <div className='w-fit mx-auto mt-[20px]'>
                <Button name="SHOP NOW" />
            </div>
        </div>
    );
};

export default Messages;