import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <p className="mt-3 text-xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
