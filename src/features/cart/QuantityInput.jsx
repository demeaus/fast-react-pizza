import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getItemQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function QuantityInput({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getItemQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default QuantityInput;
