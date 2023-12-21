import { formatCurrency } from "../../utils/helpers";
import { addItem, getItemQuantityById } from "../cart/cartSlice";
import Button from "../../ui/Button";

import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "../cart/DeleteItem";
import QuantityInput from "../cart/QuantityInput";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getItemQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddtoCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 w-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-1">
        <p className="font-medium">{name}</p>
        <p className="text-xs italic text-gray-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-gray-400">
              Sold out
            </p>
          )}
          {!soldOut &&
            (isInCart ? (
              <div className="flex items-center gap-5 sm:gap-10">
                <QuantityInput pizzaId={id} />
                <DeleteButton pizzaId={id} />
              </div>
            ) : (
              <div>
                <Button type="small" onClick={handleAddtoCart}>
                  Add to cart
                </Button>
              </div>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
