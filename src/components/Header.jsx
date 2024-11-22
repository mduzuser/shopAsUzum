import { FaSearch } from "react-icons/fa";
import { Form } from "react-router-dom";

function Header() {
  return (
    <div className="mb-5 flex w-full items-center gap-5">
      <Form className="flex grow gap-3">
        <label className="input input-sm input-bordered flex grow items-center gap-2 md:input-md">
          <input type="text" className="grow" placeholder="Search" />
          <FaSearch className="h-4 w-4 cursor-pointer opacity-70" />
        </label>

        <button
          type="submit"
          className="btn btn-sm bg-[#7000ff] text-white md:btn"
        >
          Search
        </button>
      </Form>
    </div>
  );
}

export default Header;
