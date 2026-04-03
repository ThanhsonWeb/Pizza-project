import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
	//  useNavigation is a built in hook allow you check the current state.
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	return (
		<div className="grid  grid-rows-[auto,1fr,auto]  h-screen ">
			<Header />
			<div  className="overflow-scroll" >
				<main className="    mx-auto  max-w-3xl p-3">
					{isLoading ? <Loader /> : <Outlet />}
				</main>
			</div>

			<CartOverview />
		</div>
	);
}

export default AppLayout;
