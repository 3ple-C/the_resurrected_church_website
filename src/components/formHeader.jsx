const FormHeader = (props, { className }) => {
    return (
        <div className={`space-y-2 md:pt-6 md:space-y-4 ${className}`}>
            <h1 className="text-[32px] leading-8">{props.header}</h1>
            <h3 >{props.subHeader}</h3>
        </div>
    )
}

export default FormHeader;