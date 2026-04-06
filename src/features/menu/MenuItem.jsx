import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button"

function MenuItem({ pizza }) {
	
	const {  name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

	return (
		<li className="flex gap-4 py-2 mb-3" >
			<img src={imageUrl} alt={name}  
			className={`h-24 ${soldOut ? " grayscale opacity-65 " : ""} `} />
			{/* info pizza */}
			<div className="flex grow flex-col" >
				<p className="font-medium" >{name}</p>
				<p>{ingredients.join(", ")}</p>
				<div className=" flex items-center justify-between" >
					{!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="uppercase">Sold out</p>}
				<Button>Add to card</Button>
				</div>
			</div>
		</li>
	);
}

export default MenuItem;
