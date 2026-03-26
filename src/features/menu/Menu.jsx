import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
	// b2 :  useLoaderData() to take data you fetched
	const menu = useLoaderData();
	console.log(menu);

	return (
		<>
			{menu.map((pizza) => (
				<MenuItem pizza={pizza} key={pizza.id} />
			))}
		</>
	);
}

// b1 :  user visit "/menu"  -> React call menuLoader()
// --> then  fetch data  from API inside "getMenu()"
export async function menuLoader() {
	const menu = await getMenu();
	return menu;
}

export default Menu;
