//util
import { request } from "../util/request";

//rrd
import { useLoaderData } from "react-router-dom";

//components
import { ProductContainer, Header } from "../components";

//loaders
export const loader = async () => {
  const req = request.get("/products");
  return (await req).data;
};

function Home() {
  const data = useLoaderData();
  return (
    <div className="align-elements my-5">
      <Header />
      <ProductContainer />
    </div>
  );
}

export default Home;
