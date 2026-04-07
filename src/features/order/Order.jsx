// Test ID : IIDSAT
import { getOrder } from '../../service/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import Button from '../../ui/Button';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
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
    // id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="p-4"  >
      {/* div 1 */}
      <div className="mb-12 sm:flex sm:items-center sm:justify-between ">
        <h2 className="text-3xl font-semibold"> Order ,,, Status</h2>

        <div className="space-x-4" >
          {priority && <Button variant="third">Priority</Button>}
          <Button>{status} order</Button>
        </div>
      </div>
      {/* div 2 */}
      <div className="text-xl bg-stone-400 sm:flex items-center justify-around p-4 mb-12 " >
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className="text-xl bg-stone-400 p-4 space-y-2 " >
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
