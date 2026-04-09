import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  // c1 : write directly
  const totalCartQuantity = useSelector((store) =>
    store.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  );
  // c2 : selectors
  const totalPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-700 p-4 uppercase text-white sm:px-6">
      <p className="space-x-3 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>

      <Link to="/cart"> Open cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
