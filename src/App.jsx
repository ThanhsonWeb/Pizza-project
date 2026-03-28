import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order, {  orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
	{
		element: <AppLayout />,

		errorElement: <Error />,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
				element: <Menu />,
				// loader is built in property
				loader: menuLoader,
				// if the API in menuLoader is broke -> appear <Error/>
				errorElement: <Error />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			// new form submit -> action get call
			{
				path: "/order/new",
				element: <CreateOrder />,
			
			},
			{
				path: "/order/:orderId",
				element: <Order />,
				loader: orderLoader,
				errorElement: <Error />,
			},
		],
	},
]);

function App() {
	// b2 : use RouterProvider
	return <RouterProvider router={router} />;
}

export default App;
