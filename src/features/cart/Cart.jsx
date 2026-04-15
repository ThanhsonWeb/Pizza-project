// import { Link } from "react-router-dom";
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import { useDispatch } from 'react-redux';
import EmptyCart from './EmptyCart';

function Cart() {
  const userName = useSelector((store) => store.user.username);

  const cart = useSelector((store) => store.cart.cart);

  const dispatch = useDispatch();

  function handleClearAll() {
    dispatch(clearCart());
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="p-4">
      <LinkButton>&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-3xl font-semibold">Your cart - {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-300 bg-blue-50">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-3">
        <Button to="/order/new">Order pizzas</Button>
        <Button onClick={handleClearAll} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
