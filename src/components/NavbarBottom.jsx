// //ri
// import { TbListSearch, TbShoppingBag, TbTruckDelivery } from "react-icons/tb";
// import { FaRegUser, FaShopify } from "react-icons/fa";

// //rrd
// import { useEffect, useState } from "react";

// //redux
// import { useSelector } from "react-redux";

// //rrd
// import { Link } from "react-router-dom";

// function NavbarBottom() {
//   const { allProducts } = useSelector((state) => state.products);

//   return (
//     <div className="align-elements fixed bottom-0 left-0 z-50 flex w-full items-end justify-around border-t-2 bg-base-100 py-3 lg:hidden">
//       <div className="text-center">
//         <Link
//           to={"/"}
//           className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 md:h-14 md:w-14"
//         >
//           <FaShopify className="text-3xl text-[#7000ff] md:text-4xl" />
//         </Link>
//         <p className="text-xs font-semibold md:text-xl">Home</p>
//       </div>

//       <div>
//         <Link to={"/"} className="text-center">
//           <TbListSearch className="text-4xl md:text-6xl" />
//           <p className="text-xs font-semibold md:text-xl">Catelog</p>
//         </Link>
//       </div>

//       <Link to={"/cart"} className="text-center">
//         <div className="indicator">
//           <span className="badge indicator-item">{allProducts}</span>
//           <button>
//             <TbShoppingBag className="text-4xl md:text-6xl" />
//           </button>
//         </div>

//         <p className="text-xs font-semibold md:text-xl">Cart</p>
//       </Link>

//       <div>
//         <Link className="text-center">
//           <TbTruckDelivery className="text-4xl md:text-6xl" />
//           <p className="text-xs font-semibold md:text-xl">Delivery</p>
//         </Link>
//       </div>

//       <div>
//         <Link className="text-center">
//           <FaRegUser className="text-3xl md:text-5xl" />
//           <p className="text-xs font-semibold md:text-xl">Profile</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default NavbarBottom;

//ri
import { TbListSearch, TbShoppingBag, TbTruckDelivery } from "react-icons/tb";
import { FaRegUser, FaShopify } from "react-icons/fa";

//rrd
import { useEffect, useState } from "react";

//redux
import { useSelector } from "react-redux";

//rrd
import { Link } from "react-router-dom";

function NavbarBottom() {
  const { allProducts } = useSelector((state) => state.products);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight >= documentHeight - 150) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`align-elements ${
        isFixed ? "fixed bottom-0 left-0" : "relative mt-5"
      } z-50 flex w-full items-end justify-around border-t-2 bg-base-100 py-3 lg:hidden`}
    >
      <div className="text-center">
        <Link
          to={"/"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 md:h-14 md:w-14"
        >
          <FaShopify className="text-3xl text-[#7000ff] md:text-4xl" />
        </Link>
        <p className="text-xs font-semibold md:text-xl">Home</p>
      </div>

      <div>
        <Link to={"/"} className="text-center">
          <TbListSearch className="text-4xl md:text-6xl" />
          <p className="text-xs font-semibold md:text-xl">Catelog</p>
        </Link>
      </div>

      <Link to={"/cart"} className="text-center">
        <div className="indicator">
          <span className="badge indicator-item">{allProducts}</span>
          <button>
            <TbShoppingBag className="text-4xl md:text-6xl" />
          </button>
        </div>

        <p className="text-xs font-semibold md:text-xl">Cart</p>
      </Link>

      <div>
        <Link className="text-center">
          <TbTruckDelivery className="text-4xl md:text-6xl" />
          <p className="text-xs font-semibold md:text-xl">Delivery</p>
        </Link>
      </div>

      <div>
        <Link className="text-center">
          <FaRegUser className="text-3xl md:text-5xl" />
          <p className="text-xs font-semibold md:text-xl">Profile</p>
        </Link>
      </div>
    </div>
  );
}

export default NavbarBottom;
