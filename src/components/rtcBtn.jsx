const Button = (props, { className }) => {
    return (
        <div>
            <a href='/' className={`bg-[#01385F] px-14 py-3.5 text-white xl:px-16 lg:px-14 md:py-5 md:px-12 sm:px-10 sm:py-3 rounded-md ${className}`}>{props.name}</a>
        </div>
    )
}

export default Button;