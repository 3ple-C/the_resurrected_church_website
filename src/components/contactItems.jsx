const Contacts = (props) => {
    return (
        <a href="/" className='' id=''>
            <div className='flex items-center gap-2'>
                <div className=''>
                    <img src={props.source} alt={props.alt} className='w-full' />
                </div>
                <div className='text-base flex flex-col items-start gap-1'>
                    <p className="font-extrabold">{props.name}</p>
                    <p className='text-base md:text-base text'>{props.contacts}</p>
                </div>
            </div>
        </a>
    );
};


export default Contacts