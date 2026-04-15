// Test ID : IIDSAT
import { getOrder } from '../../service/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import Button from '../../ui/Button';
import OrderItem from './OrderItem';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { getCart } from '../cart/cartSlice';
import { useSelector } from 'react-redux';
// const order = {
// 	id: "ABCDEF",
// 	customer: "Jonas",
// 	phone: "123456789",
// 	address: "Arroios, Lisbon , Portugal",
// 	priority: true,
// 	estimatedDelivery: "2027-04-25T10:00:00",
// 	cart: [
// 		{
// 			pizzaId: 7,
// 			name: "Napoli",
// 			quantity: 3,
// 			unitPrice: 16,
// 			totalPrice: 48,
// 		},
// 		{
// 			pizzaId: 5,
// 			name: "Diavola",
// 			quantity: 2,
// 			unitPrice: 16,
// 			totalPrice: 32,
// 		},
// 		{
// 			pizzaId: 3,
// 			name: "Romana",
// 			quantity: 1,
// 			unitPrice: 15,
// 			totalPrice: 15,
// 		},
// 	],
// 	position: "-9.000,38.000",
// 	orderPrice: 95,
// 	priorityPrice: 19,
// };

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const cart = useSelector(getCart);

  return (
    <div className="p-4">
      {/* div 1 */}
      <div className="mb-12 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-3xl font-semibold"> Order #{id} Status</h2>

        <div className="space-x-4">
          {priority && (
            <span className="rounded-md bg-red-500 px-3 py-1 font-semibold uppercase tracking-wide text-rose-50">
              Priority
            </span>
          )}
          <Button>{status} order</Button>
        </div>
      </div>
      {/* div 2 */}
      <div className="mb-12 items-center justify-around bg-stone-400 p-4 text-xl sm:flex">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="mb-12 divide-y-2 p-3">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-400 p-4 text-xl">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

// b1 create loader

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
