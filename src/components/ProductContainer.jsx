//rrd
import { useLoaderData } from "react-router-dom";
import { SingleProduct } from "./";

function ProductContainer() {
  const { products } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        const { id, brand, price, thumbnail, title } = product;
        return (
          <SingleProduct
            key={id}
            id={id}
            brand={brand}
            price={price}
            thumbnail={thumbnail}
            title={title}
            product={product}
          />
        );
      })}
    </div>
  );
}

export default ProductContainer;
