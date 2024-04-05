const Image = (props) => {
    return (
        <div className=''>
            <img src={props.src} alt="rtc_messages" className='object-contain ' />
        </div>
    );
};

export default Image;