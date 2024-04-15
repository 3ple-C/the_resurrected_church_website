
import '../assets/css/main.css'

const Text = (props) => {
    return (
        <div className='textContainer'>
            <p className='text-base text-justify leading-6 xl:leading-8 lg:leading-6 md:text-sm md:leading-6 md:pb-3'>{props.content}</p>
        </div>
    );
};

export default Text;