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
    <div className="my-5 border-t-2">
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
    </div>

    // <tr>
    //   <th>
    //     <label>
    //       <input
    //         type="checkbox"
    //         className="lg:checkbox-base checkbox checkbox-xs md:checkbox-sm"
    //       />
    //     </label>
    //   </th>

    //   <td>
    //     <div className="flex items-center gap-3">
    //       <div className="avatar">
    //         <div className="mask mask-squircle h-12 w-12">
    //           <img src={thumbnail} alt="product image" />
    //         </div>
    //       </div>
    //       <div>
    //         <div className="font-bold">{title}</div>
    //         <div className="text-sm opacity-50">Brand:{brand}</div>
    //       </div>
    //     </div>
    //   </td>

    //   <td>{returnPolicy}</td>
    //   <td>
    //     <div className="flex items-center gap-3">
    //       <button
    //         onClick={() => {
    //           if (prod.amount == 1) {
    //             dispatch(removeProduct(id));
    //           } else {
    //             dispatch(dicrementAmount(id));
    //           }
    //         }}
    //         className="btn btn-sm"
    //       >
    //         &#8722;
    //       </button>
    //       <span className="text-xl font-bold">{amount}</span>
    //       <button
    //         onClick={() => dispatch(incrementAmount(id))}
    //         className="btn btn-sm"
    //       >
    //         &#43;
    //       </button>
    //     </div>
    //   </td>
    //   <th>
    //     <button
    //       className="hover:opacity-80"
    //       onClick={() => dispatch(removeProduct(id))}
    //     >
    //       <FaTrash className="text-xl text-red-600" />
    //     </button>
    //   </th>
    // </tr>
  );
}

export default CartItems;
