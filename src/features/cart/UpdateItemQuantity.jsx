// Update Cart Quantities
// b1 : create new component
// b2 : use it in CartItem

import Button from '../../ui/Button';

import { decreaseItem } from '../cart/cartSlice';
import { increaseItem } from '../cart/cartSlice';
import { useDispatch } from 'react-redux';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();


  return (
    <div className="flex items-center justify-center gap-1 md:gap-3">
      {/* c1 */}
      <Button type="round" onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      {/* c2 */}
      <Button type="round" onClick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
