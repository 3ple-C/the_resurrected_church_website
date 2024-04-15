
import '../assets/css/main.css'

const Text = (props) => {
    return (
        <div className='textContainer'>
            <p className='text-[16px] font-[500] text-justify leading-6 xl:leading-[32px] lg:leading-6 md:text md:leading-6 md:pb-3'>{props.content}</p>
        </div>
    );
};

export default Text;