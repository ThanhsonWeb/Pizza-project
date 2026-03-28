import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
	//  useNavigation is a built in hook allow you check the current state.
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	return (
		<div className="layout">
			<Header />
			<main>
				<h1>App Content👋👋</h1>
				{isLoading ? <Loader /> : <Outlet />}
			</main>

			<CartOverview />
		</div>
	);
}

export default AppLayout;
