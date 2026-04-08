import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { addItem } from '../cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
    navigate('/cart');
  }

  return (
    <li className="mb-3 flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? ' opacity-65 grayscale' : ''} `}
      />
      {/* info pizza */}
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase">Sold out</p>
          )}
          {!soldOut && <Button onClick={handleAddToCart}>Add to card</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
