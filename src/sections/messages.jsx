// Messages Image
import grace2 from '../assets/images/Frame 1590 (1).png';
import faithWarfare from '../assets/images/Frame 1590.png';
import delivered from '../assets/images/Frame 1589.png';
import grace1 from '../assets/images/Frame 1589 (1).png';
import bloodline from '../assets/images/Frame 1591.png';
import assurance from '../assets/images/Frame 1592.png';
import healing from '../assets/images/Frame 1591 (1).png';
import labors from '../assets/images/Frame 1592 (1).png'


// components
import {Message} from '../components/message';


const Messages = () => {
    return (
        <section className='space-y-12 pt-16 xl:space-y-20 md:space-y-16 xl:pt-30 lg:pt-28 md:pt-24 pb-6'>
            <div className='text-center space-y-3  xl:w-[58%] lg:w-[60%] lg:space-y-4 md:w-4/6 mx-auto'>
                <h1 className='lg:text-[28px] md:text-2xl font-bold'>Get Refreshed</h1>
                <p className='font-medium text-xs px-4 sm:text-base'>Explore our collection of inspirational sermons and messages that offer spiritual guidance and upliftment. Listen online at your convenience.</p>
            </div>

            <div className=' messages w-[%] mx-auto flex flex-wrap justify-center px-2 gap-3' id='messages'>
                <Message src={delivered} name="Delivered" />
                <Message src={faithWarfare} name="Faith Warfare"/>
                <Message src={bloodline} name="The Bloodline Blessings"/>
                <Message src={assurance} name="Assurance of Faith"/>
                <Message src={grace1} name="Grace & Consecrations 1"/>
                <Message src={grace2} name="Grace & Consecrations 2"/>
                <Message src={healing} name="Healing in the Atonement"/>
                <Message src={labors} name="Spiritual Labour"/>
                
                


            </div>
        </section>
    );
};

export default Messages;