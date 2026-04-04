import { Link } from "react-router-dom"

function Button({children, to}) {

    const className=" inline-block p-3 bg-green-600 rounded-full font-semibold uppercase  tracking-wide   transition-colors duration-500 hover:bg-blue-300  sm:px-6 sm:py-4 "

    if (to) 
        return (
            <Link to={to} className={className}  >{children}</Link>
        )

    return (
        <button className={className} >
            {children}
        </button>
    )
}

export default Button
