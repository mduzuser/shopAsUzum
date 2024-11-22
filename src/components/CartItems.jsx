//ri
import { FaTrash } from "react-icons/fa";

//product slice
import {
  incrementAmount,
  dicrementAmount,
  removeProduct,
} from "../features/productSlice";

//redux
import { useDispatch } from "react-redux";

function CartItems({ prod }) {
  const { thumbnail, amount, title, brand, id, returnPolicy, description } =
    prod;
  const dispatch = useDispatch();

  return (
    <>
      <div className="relative my-5 border-t-2">
        <div className="flex items-center gap-3">
          <label>
            <input
              type="checkbox"
              className="lg:checkbox-base checkbox checkbox-xs md:checkbox-sm"
            />
          </label>
          <div className="flex w-full items-center gap-3">
            <figure>
              <img src={thumbnail} className="w-28" />
            </figure>
            <div>
              <p className="font-bold">{title}</p>
              <p className="text-sm font-bold">
                Brand:
                <span className="opacity-50"> {brand}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <p className="font-semibold">{returnPolicy}</p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (prod.amount == 1) {
                  dispatch(removeProduct(id));
                } else {
                  dispatch(dicrementAmount(id));
                }
              }}
              className="btn btn-sm"
            >
              &#8722;
            </button>
            <span className="text-xl font-bold">{amount}</span>
            <button
              onClick={() => dispatch(incrementAmount(id))}
              className="btn btn-sm"
            >
              &#43;
            </button>
          </div>
        </div>

        <div className="mt-3">
          <p>{description}</p>
        </div>

        <button
          className="absolute right-1 top-3 hover:opacity-80"
          onClick={() => dispatch(removeProduct(id))}
        >
          <FaTrash className="text-xl text-red-600" />
        </button>
      </div>
    </>
  );
}

export default CartItems;
