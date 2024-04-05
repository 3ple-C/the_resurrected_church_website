const HeadText = (props) => {
    return (
        <div className="space-y-3 xl:space-y-3 lg:space-y-2 md:space-y-2">
            <h3 className='xl:text-base lg:text-sm md:text-[10px] font-bold text-[#01385F]'>{props.title}</h3>
            <h1 className='xl:text-[28px] lg:text-xl md:text-[16px] font-semibold'>{props.subtitle}</h1>
        </div>
    )
}

export default HeadText;