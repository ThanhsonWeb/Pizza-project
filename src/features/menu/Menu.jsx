import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
	const menu = useLoaderData();

	return (
		<ul  className="space-y-2 divide-y divide-stone-200 p-2" >
			{menu.map((pizza) => (
				<MenuItem pizza={pizza} key={pizza.id} />
			))}
		</ul>
	);
}

export async function menuLoader() {
	const menu = await getMenu();
	return menu;
}

export default Menu;
