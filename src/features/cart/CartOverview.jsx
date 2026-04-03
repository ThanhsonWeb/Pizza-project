import { Link } from "react-router-dom";

function CartOverview() {
	return (
		<div className=" flex items-center justify-between
		  bg-stone-700 text-white uppercase p-4 sm:px-6 ">
			<p  className="font-semibold  space-x-3 text-stone-300" >
				<span>23 pizzas</span>
				<span>$23.45</span>
			</p>
			
			<Link to="/cart"> Open cart &rarr; </Link>
		</div>
	);
}

export default CartOverview;
