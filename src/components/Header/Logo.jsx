function Logo() {
  const url = import.meta.env.BASE_URL;

  return (
    <div className="pl-6 md:pl-10 lg:pl-16">
      <img
        src={url+"/assets/shared/logo.svg"}
        className="w-[50px] h-[50px]"
        alt="logo"
      />
    </div>
  );
}

export default Logo;
