const Button = (props, { className }) => {
    return (
        <div>
            <a href='/' className={`bg-[#F8931F] text-center w-[10rem] rounded-[50px] block mx-auto py-3 md:mx-0 text-white  ${className}`}>{props.name}</a>
        </div>
    )
}

export default Button;