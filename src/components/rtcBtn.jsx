const Button = (props) => {
    return(
        <div>
            <a href='/' className='bg-[#01385F] px-14 py-3.5 text-white xl:px-16 xl:py-4 lg:px-14 lg:py-3 md:py-2 md:px-12 sm:px-10 sm:py-2.5 rounded-md '>{props.name}</a>
        </div>
    )
}

export default Button;