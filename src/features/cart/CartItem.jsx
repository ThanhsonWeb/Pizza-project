import {formatCurrency} from "../../utils/helpers"
import Button from "../../ui/Button"

function CartItem({ item }) {
  const {  name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between font-semibold p-2" >
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4 ">
        <p>{formatCurrency(totalPrice)}</p>
        <Button variant="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
