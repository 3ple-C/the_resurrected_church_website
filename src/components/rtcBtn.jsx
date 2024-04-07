const Button = (props, { className }) => {
    return (
        <div>
            <a href='/' className={`bg-[#01385F] text-center w-[8.5rem] block mx-auto py-5 md:mx-0 text-white rounded-md ${className}`}>{props.name}</a>
        </div>
    )
}

export default Button;