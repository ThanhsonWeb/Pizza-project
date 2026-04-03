// import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../service/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
// 	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
// 		str,
// 	);

const fakeCart = [
	{
		pizzaId: 12,
		name: "Mediterranean",
		quantity: 2,
		unitPrice: 16,
		totalPrice: 32,
	},
	{
		pizzaId: 6,
		name: "Vegetale",
		quantity: 1,
		unitPrice: 13,
		totalPrice: 13,
	},
	{
		pizzaId: 11,
		name: "Spinach and Mushroom",
		quantity: 1,
		unitPrice: 15,
		totalPrice: 15,
	},
];

function CreateOrder() {
	// const [withPriority, setWithPriority] = useState(false);
	const cart = fakeCart;

	console.log(cart);

	return (
		<div>
			{/* b1: use Form  */}
			<Form method="POST" className="text-xl" >
			<h2>Ready to order? let is go!</h2>
 {/* div 1  */}
				<div >
					<label >First Name</label>
					<input  className="input" type="text" name="customer" required />
				</div>
{/* div 2 */}
				<div >
					<label>Phone number</label>
					<div>
						<input  className="input"  type="tel" name="phone" required />
					</div>
				</div>
{/* div 3 */}
				<div  >
					<label>Address</label>
					<div>
						<input className="input"  type="text" name="address" required />
					</div>
				</div>
{/* div 4  */}
				<div className="flex items-center my-3 space-x-3" >
					<input
						className="h-6 w-6  accent-blue-400 focus:outline-none focus:ring-blue-400 "
						type="checkbox"
						
						name="priority"
						id="priority"
						// value={withPriority}
						// onChange={(e) => setWithPriority(e.target.checked)}
					/>
					<label htmlFor="priority">Want to yo give your order priority?</label>
				</div>
{/* div 5 */}
				<div>
					<input  type="hidden" name="cart" value={JSON.stringify(cart)} />
					<Button >Order now</Button>
				</div>
			</Form>
		</div>




	);
}
// b2: new form submit ->  call this action -> request send to the server
export async function action({ request }) {
	const formData = await request.formData(); 
	const data = Object.fromEntries(formData);
	console.log(data)
	const order = {
		...data,
		cart: JSON.parse(data.cart),
		priority: data.priority === "on",
	};

	const newOrder = await createOrder(order);

	return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
