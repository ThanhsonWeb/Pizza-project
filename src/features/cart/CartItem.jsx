import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import UpdateItemQuantity from './UpdateItemQuantity';

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
        {/* b2 : use it with conditional */}
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={quantity <= 0 ? handleDeleteItem() : quantity}
        />

        <Button onClick={handleDeleteItem} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
