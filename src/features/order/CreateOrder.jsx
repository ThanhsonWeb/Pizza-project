// import { useState } from "react";
import { Form, redirect } from 'react-router-dom';
import { createOrder } from '../../service/apiRestaurant';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
// 	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
// 		str,
// 	);

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const username = useSelector((store) => store.user.username);

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  console.log(cart);

  return (
    <div className="p-4">
      <h2 className="mb-8 text-2xl font-semibold">Ready to order? let go!</h2>
      <Form method="POST">
        {/* div 1  */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input flex-1"
            type="text"
            defaultValue={username}
            name="customer"
            required
          />
        </div>

        {/* div 2 */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="flex-1">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
        </div>
        {/* div 3 */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="flex-1">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>
        {/* div 4  */}
        <div className="my-8 flex items-center space-x-3">
          <input
            className="h-6 w-6 accent-blue-400 focus:outline-none focus:ring-blue-400"
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
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button>Order now</Button>
        </div>
      </Form>
    </div>
  );
}
// b2: new form submit ->  call this action -> request send to the server
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
