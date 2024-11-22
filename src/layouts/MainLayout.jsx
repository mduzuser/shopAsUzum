//rrd
import { Outlet } from "react-router-dom";

//components
import { Navbar, NavbarBottom } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <NavbarBottom />
    </>
  );
}

export default MainLayout;
