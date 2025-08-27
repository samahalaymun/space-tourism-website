import { useEffect, useState } from "react";
import jsonData from "../../data.json";

function Destination() {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const destinations = jsonData.destinations;
  const current=destinations[currentIndex];
  console.log(current);

  useEffect(() => {
    setData(jsonData);
  }, []);
  return (
    <section
      className="min-h-screen flex flex-col items-center text-white px-6 md:px-12 lg:px-32 py-20"
      style={{
        backgroundImage: "url('/images/background-destination-desktop.jpg')",
      }}
    >
      <h2 className="uppercase text-lg md:text-2xl tracking-[4px] mb-18 text-left w-full">
        <span className="text-gray-500 font-bold mr-4">01</span> Pick your
        destination
      </h2>

      <div className="flex flex-col flex-grow-1 lg:flex-row items-center lg:items-start gap-12 lg:gap-16 w-full">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={current.images.png}
            alt="Moon"
            className="w-48 h-48 md:w-72 md:h-72 lg:w-auto lg:h-auto object-contain"
          />
        </div>

        <div className="flex flex-1 justify-center">
          <div className=" flex flex-col items-center lg:items-start gap-10">
            {/* Tabs */}
            <div className="flex justify-center lg:justify-start gap-6 uppercase tracking-widest text-gray-400">
              {destinations.map((dest, index) => (
                <button
                  className={`pb-2 cursor-pointer hover:border-b-2 hover:border-white   ${
                    index === currentIndex
                      ? "border-b-2 border-white text-white"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {dest.name}
                </button>
              ))}
            </div>

            {/* اسم الكوكب */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl uppercase font-serif">
              {current.name}
            </h1>

            {/* النص الوصفي */}
            <p className="text-gray-300 text-center lg:text-start leading-relaxed max-w-md mx-auto lg:mx-0">
              {current.description}
            </p>

            {/* الخط الفاصل */}
            <div className="w-full h-px bg-gray-700 my-6"></div>

            {/* البيانات */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center lg:justify-start uppercase tracking-widest">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-sm text-gray-400">Avg. distance</p>
                <p className="text-2xl md:text-3xl"> {current.distance}</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-sm text-gray-400">Est. travel time</p>
                <p className="text-2xl md:text-3xl">{current.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
