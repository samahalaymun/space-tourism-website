import  { useEffect, useState } from "react";
import jsonData from "../../data.json";


function Crew() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const crews = jsonData.crew;
    const current = crews[currentIndex];
  
    useEffect(() => {
      const timer=setTimeout(() => {
        if(currentIndex < crews.length -1){
            setCurrentIndex(currentIndex + 1);
        }else{
          setCurrentIndex(0)
        }
      }, 5000);

      return ()=>{
        clearTimeout(timer)
      }
    }, [currentIndex]);
    
  return (
    <section className="min-h-screen flex flex-col  gap-6 items-center text-white p-6 md:p-10 lg:px-32 py-12">
      <h2 className="uppercase text-lg md:text-2xl tracking-[4px] text-center md:text-left w-full">
        <span className="text-gray-500 font-bold mr-4">02</span> meet your crew
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
        {/* Left side content */}
        <div className="flex flex-col gap-8 lg:gap-10 pt-10 lg:pt-0">
          <div className=" flex items-center justify-center lg:justify-start flex-1 min-h-[200px]">
            <div className="flex flex-col gap-6 items-center lg:items-start ">
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <h2 className="text-lg md:text-2xl lg:text-[32px] uppercase text-gray-400  tracking-widest">
                  {current.role}
                </h2>
                <h1 className="text-2xl md:text-[40px] lg:text-[56px] uppercase ">
                  {current.name}
                </h1>
              </div>
              <p className="text-blue-300 leading-loose text-[15px] md:text-[16px] lg:text-lg text-center lg:text-start max-w-md mx-auto lg:mx-0">
                {current.bio}
              </p>
            </div>
          </div>
          <div className=" flex   justify-center lg:justify-start min-h-[65px]">
            <div className="flex flex-row gap-2 md:gap-4 lg:gap-10 ">
              {crews.map((crew, index) => (
                <button
                  key={crew.name}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-gray-400 ${
                    currentIndex === index
                      ? "bg-white scale-125"
                      : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center items-center  relative ">
          <img
            src={current.images.png}
            key={current.name}
            alt="crew"
            className="w-48 h-48 md:w-72 md:h-72 lg:w-auto lg:h-[500px]  object-contain mx-auto  transition-all duration-700 ease-in-out"
          />
          <div className="absolute  bottom-0 w-full h-25 md:h-40 bg-gradient-to-t from-[#0B0D17] to-transparent z-0"></div>
        </div>
      </div>
    </section>
  );
}

export default Crew;
