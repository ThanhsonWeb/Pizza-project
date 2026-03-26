import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
	//  useNavigation is a built in hook allow you check the current state. 
	const navigation = useNavigation();
	console.log(navigation); // state can be "idle","loading","submitting"
	const isLoanding = navigation.state === "loading";
	console.log(isLoanding);
	return (
		<div className="layout">
			{isLoanding && <Loader />}

			<Header />
			<main>
				<h1>App Content👋👋</h1>
				<Outlet />
			</main>

			<CartOverview />
		</div>
	);
}

export default AppLayout;
