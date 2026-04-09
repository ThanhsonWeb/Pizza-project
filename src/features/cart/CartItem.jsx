import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <li className="flex items-center justify-between p-2 font-semibold">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4">
        <p>{formatCurrency(totalPrice)}</p>
        <Button onDelete={handleDeleteItem} variant="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
