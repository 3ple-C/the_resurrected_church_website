
import '../assets/css/main.css';
import welcomeImg from '../assets/images/Frame 1576.png';
import welcomeImg2 from '../assets/images/Frame 1662.png';

// components
// import Image from "../components/rtcImg";
import Text from '../components/textcontainer';
import HeadText from '../components/headText';

const Welcome = () => {
    const headText = "Who we are";
    const subHeadText = "Welcome to the Resurrected Church";
    const text = "The Resurrected Church stands as a beacon of hope, dedicated to revealing and manifesting the resurrected life in every individual. Rooted in the timeless teachings of Christ, we believe in the power of resurrection to transform lives. Who are we? We are a community bound by faith, love, and the pursuit of spiritual growth. Our mission is clear: to awaken the dormant potential within each soul, guiding them towards a life imbued with purpose, meaning, and divine grace. At the Resurrected Church, we embrace diversity, recognizing the inherent worth and dignity of every individual. We foster an inclusive environment where all are welcome to explore, question, and grow in their faith journey. Through worship, fellowship, and service, we strive to create a nurturing space where the resurrected life can flourish. We encourage active engagement with scripture, prayer, and reflection, recognizing them as pathways to deeper spiritual understanding and connection. Driven by compassion and inspired by Christ’s example, we extend our hands in service to others, seeking to alleviate suffering and uplift the marginalized. Together, we journey towards a more enlightened and compassionate world, guided by the eternal truth of resurrection and the boundless love of God.";

    return (
        <section className='w-full flex flex-col welcome gap-10 mt-14 lg:mt-28 md:mt-24 md:flex-row md:gap-6 md:px-14 xl:px-20 xl:gap-10 xl:mt-30'>
            
                <div className='desktop px-4' id='welcome_img'>
                    <img src={welcomeImg} alt="rtc_messages" className='object- ' />
                </div>

                <div className='mobile order-1  px-4 md:px-1'>
                    <img src={welcomeImg2} alt="rtc_messages" className='object-cover w-full' />
                </div>
          

            <div className=' px-4  space-y-3 xl:w-[52%] xl:space-y-3 lg:w-[80%] lg:space-x-2 md:w-[100%] md:px-4 md:space-y-2  md:order-2' id='welcome_text'>
                <HeadText title={headText} subtitle={subHeadText} />
                <Text content={text} />
            </div>
        </section>
    );
};


export default Welcome;