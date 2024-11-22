//ri
import { FaSearch } from "react-icons/fa";

//rrd
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  //scroll header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        isScrolled
          ? "fixed left-0 top-0 z-50 w-full bg-white px-5 pt-3"
          : "relative"
      } px-3 md:px-10`}
    >
      <div className="mb-5 flex w-full items-center gap-5">
        <Form className="flex grow gap-3">
          <label className="input input-sm input-bordered flex grow items-center gap-2 md:input-md">
            <input type="text" className="grow" placeholder="Search" />
            <FaSearch className="h-4 w-4 cursor-pointer opacity-70" />
          </label>

          <button
            type="submit"
            className="btn btn-sm bg-[#7000ff] text-white md:btn-md"
          >
            Search
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Header;
