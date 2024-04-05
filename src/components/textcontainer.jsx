
import '../assets/css/main.css'

const Text = (props) => {
    return (
        <div className='textContainer'>
            <p className='text-sm pb- text-start leading-6 xl:leading-8 xl:text-[16px] lg:leading-6 lg:text-xs md:text-start md:text-[10px] md:leading-4 md:pb-3'>{props.content}</p>
        </div>
    );
};

export default Text;