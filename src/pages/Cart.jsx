//redux
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/productSlice";

//components
import { CartItem } from "../components";

function Cart() {
  const { products, price, allProducts } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  return (
    <div className="align-elements my-10">
      <div className="flex w-full items-center gap-3">
        <label>
          <input
            type="checkbox"
            className="lg:checkbox-base checkbox checkbox-xs md:checkbox-sm"
          />
        </label>

        <p>All products</p>
      </div>

      <div>
        {products.map((prod) => {
          return <CartItem prod={prod} key={prod.id} />;
        })}
      </div>

      <div className="mt-5 flex w-full items-center justify-between border-t-2 py-3">
        <div className="flex items-center gap-3">
          <p className="font-bold">
            Amount: <span className="text-black">{allProducts}</span>
          </p>
          <p className="font-bold">
            Price: <span className="text-black">${price}</span>
          </p>
        </div>

        <button
          className="btn btn-sm bg-red-600 text-white"
          onClick={() => dispatch(clearCart())}
        >
          Clear All
        </button>
      </div>
    </div>
    // <div className="align-elements my-10">
    //   <div className="overflow-x-auto">
    //     <table className="table">
    //       {/* head */}
    //       <thead>
    //         <tr>
    //           <th>
    //             <label>
    //               <input
    //                 type="checkbox"
    //                 className="lg:checkbox-base checkbox checkbox-xs md:checkbox-sm"
    //               />
    //             </label>
    //           </th>
    //           <th>Product name:</th>
    //           <th>Return policy:</th>
    //           <th>Amount:</th>
    //           <th></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {products.map((prod) => {
    //           return <CartItem prod={prod} key={prod.id} />;
    //         })}
    //       </tbody>

    //       <tfoot>
    //         <tr>
    //           <th></th>
    //           <th>
    //             Amount: <span className="text-black">{allProducts}</span>
    //           </th>
    //           <th>
    //             Price: <span className="text-black">${price}</span>
    //           </th>
    //           <th>
    //             <button
    //               className="btn btn-sm bg-red-600 text-white"
    //               onClick={() => dispatch(clearCart())}
    //             >
    //               Clear All
    //             </button>
    //           </th>
    //           <th></th>
    //         </tr>
    //       </tfoot>
    //     </table>
    //   </div>
    // </div>
  );
}

export default Cart;
