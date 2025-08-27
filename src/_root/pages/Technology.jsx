import { useState, useEffect } from "react";
import jsonData from "../../data.json";

function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const technology = jsonData.technology;
  const current = technology[currentIndex];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col  gap-6 items-center text-white p-0 lg:pl-32 lg:pr-0 py-12">
      <h2 className="uppercase text-lg md:text-2xl tracking-[4px] text-center md:text-left w-full  md:px-10 lg:p-0">
        <span className="text-gray-500 font-bold mr-4">03</span> space launch
        101
      </h2>

      <div className="flex flex-wrap-reverse gap-8 w-full ">
        <div className="w-full lg:w-[52.4%] h-full lg:min-h-[600px] flex items-center flex-1 ">
          <div className="w-full flex flex-col lg:flex-row p-6 md:p-10 lg:p-0  lg:gap-16 gap-10 items-center lg:items-start">
            <div className="flex lg:flex-col flex-row lg:gap-8 md:gap-2 gap-4">
              {technology.map((tech, index) => (
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`lg:w-20 lg:h-20 h-10 w-10 md:w-14 md:h-14 rounded-full cursor-pointer hover:bg-white hover:text-blue-900 text-lg md:text-[24px] lg:text-[32px] ${
                    currentIndex === index
                      ? "bg-white text-blue-900"
                      : "text-white border border-white/25"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="lg:text-left text-center">
                <h2 className="uppercase text-lg md:text-[24px] lg:text-[32px] text-gray-400  tracking-widest">
                  THE TERMINOLOGY…
                </h2>
                <h1 className="text-white uppercase text-[24px] md:text-[40px] lg:text-[56px]">
                  {current.name}
                </h1>
              </div>
              <p className="text-blue-300 leading-loose text-[15px] md:text-[16px] lg:text-lg lg:text-left text-center">
                {current.description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-16 lg:pt-0 lg:w-[47.6%] h-full">
          <div className="flex justify-end items-center">
            <img
              src={
                screenWidth > 1024
                  ? current.images.portrait
                  : current.images.landscape
              }
              key={current.name}
              alt="crew"
              className="w-full h-full  lg:w-full lg:max-h-[600px]  object-cover mx-auto  transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
