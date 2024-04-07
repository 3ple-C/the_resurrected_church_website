const FormHeader = (props, { className }) => {
    return (
        <div className={`space-y-2 md:pt-6 md:space-y-4 ${className}`}>
            <h4 className="text-[24px] md:text-[32px] leading-8 text-center">{props.header}</h4>
            <h3 >{props.subHeader}</h3>
        </div>
    )
}

export default FormHeader;