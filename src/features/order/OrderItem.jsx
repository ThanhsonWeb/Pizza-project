import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item}) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="p-2 text-xl space-y-2 flex items-center justify-between" >
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold" >{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
