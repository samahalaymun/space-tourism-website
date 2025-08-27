import { NavLink } from 'react-router-dom';

function SideMenu() {
  return (
    <div className="fixed top-0 z-2 transform ease-in-out delay-500 right-0 bottom-0 w-[67%] h-full bg-white/5 backdrop-blur-lg block md:hidden ">
      <div></div>
      <ul className=" flex flex-col gap-8 mt-20 ">
        <li className="block w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "side-nav-link side-link-active" : "side-nav-link"
            }
          >
            <span className="">00</span> Home
          </NavLink>
        </li>
        <li className="block w-full">
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive ? "side-nav-link side-link-active" : "side-nav-link"
            }
          >
            <span className="">01</span> destination
          </NavLink>
        </li>
        <li className="block w-full">
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive ? "side-nav-link side-link-active" : "side-nav-link"
            }
          >
            <span className="">02</span> crew
          </NavLink>
        </li>
        <li className="block w-full">
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive ? "side-nav-link side-link-active" : "side-nav-link"
            }
          >
            <span className="">03</span> technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu
