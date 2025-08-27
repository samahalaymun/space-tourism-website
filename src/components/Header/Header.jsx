import React, { useState } from "react";
import Logo from "./Logo";

import SideMenu from "./SideMenu";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import Divider from "./Divider";

function Header() {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <header className=" relative lg:mt-10">
      <div className="flex items-center justify-between h-[99px] ">
        <Logo />
       <Divider />
       <NavLinks />
       {openMenu&& <SideMenu/>}
       <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </header>
  );
}

export default Header;
