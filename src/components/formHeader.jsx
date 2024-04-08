const FormHeader = (props) => {
    return (
        <div className={`space-y-2 md:pt-6 md:space-y-4`}>
            <h4 className="text-[24px] md:text-[32px] leading-8 text-start md:text-start">{props.header}</h4>
            <h3 >{props.subHeader}</h3>
        </div>
    )
}

export default FormHeader;