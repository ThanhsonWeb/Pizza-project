import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
function Header() {
	return (
		<header className="border-b-4 border-stone-600  bg-blue-500 uppercase text-2xl text-center py-2  sm:py-9  " >
			<Link to="/"  className="tracking-wide  shadow-lg  "  > Fast React Pizza Co. </Link>
			<SearchOrder />
			<UserName/>
		</header>
	);
}

export default Header;
