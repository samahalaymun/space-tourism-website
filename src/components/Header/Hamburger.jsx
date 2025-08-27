function Hamburger({ setOpenMenu, openMenu }) {
  const url = import.meta.env.BASE_URL;

  return (
    <div className="pr-6 block md:hidden z-3">
      <button onClick={() => setOpenMenu(!openMenu)}>
        <img
          src={
            openMenu
              ? url + "/assets/shared/icon-close.svg"
              : url + "/assets/shared/icon-hamburger.svg"
          }
          className="w-6 h-[21px]"
          alt="menu-hamburger"
        />
      </button>
    </div>
  );
}

export default Hamburger;
