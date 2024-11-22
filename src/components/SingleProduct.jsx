//ri
import { FaShoppingBag } from "react-icons/fa";

//rrd
import { Link } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

function SingleProduct({ id, brand, price, thumbnail, title, product }) {
  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, amount: 1 }));
  };
  return (
    <Link
      to={`/product/${id}`}
      className="group card card-compact max-w-96 bg-base-100 shadow-xl"
      key={id}
    >
      <figure className="cursor-pointer bg-black">
        <img
          src={thumbnail}
          alt="Shoes"
          className="transition duration-300 group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{brand}</p>
        <div className="card-actions justify-end">
          <div className="flex w-full items-center justify-between">
            <p className="font-semibold">${price}</p>

            <div onClick={handleAddItem}>
              <FaShoppingBag className="text-xl text-[#7000ff]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SingleProduct;
