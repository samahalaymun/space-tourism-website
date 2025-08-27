import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="min-w-[55.7%] h-[99px] bg-white/5 backdrop-blur-lg hidden md:flex justify-center">
      <div className="items-center flex flex-row px-16 gap-12 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span className="hidden lg:inline font-semibold">00</span> Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span className="hidden lg:inline font-semibold">01</span> destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span className="hidden lg:inline font-semibold">02</span> crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span className="hidden lg:inline font-semibold">03</span> technology
        </NavLink>
      </div>
    </div>
  );
}

export default NavLinks
