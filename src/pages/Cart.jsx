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
    <>
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
    </>
  );
}

export default Cart;
