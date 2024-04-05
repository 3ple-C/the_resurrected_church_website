// Icon Images
import cloud from '../assets/images/solar_cloud-download-linear.png';
import video from '../assets/images/carbon_video.png';
import headphones from '../assets/images/iconamoon_headphone-light.png';


const Message = (props) => {
    return (
        <a href="/" className='hover:shadow-lg hover:scale-95 hover:duration-500 duration-500 block w-[45%] md:w-fit     px-1 pb-1.5'>
            <div className='space-y-4 message'>
                <div className=''>
                    <img src={props.src} alt="rtc_messages" className='' />
                </div>
                <div className='flex items-center gap-2 '>
                    <img src={video} alt="rtc-video" />
                    <img src={headphones} alt="rtc_headphones" />
                    <img src={cloud} alt="rtc_cloud" />
                </div>
                <h3 className='text-base md:text-xl font-bold text-[#01385F] '>{props.name}</h3>
            </div>
        </a>
    )
}

export default Message;