import { Link ,useNavigate} from "react-router-dom"

function LinkButton({children, to}) {

    const navigate = useNavigate();
    const className = "text-sm text-stone-300 hover:underline hover:text-blue-600 "

    if(to === "-1") 
        return
     <button onClick={() => navigate(-1)}>&larr; Go back</button>

    return (
       <Link to="/menu" className= {className} >{children}</Link>
    )
}

export default LinkButton
