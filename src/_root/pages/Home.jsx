function Home() {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row items-center lg:justify-between px-6 md:px-12 lg:px-32 text-white"
    >
      {/* النصوص */}
      <div className="text-center lg:text-left max-w-xl space-y-6 mt-20 lg:mt-0">
        <p className="text-base md:text-lg tracking-[3px] uppercase text-gray-400">
          So, you want to travel to
        </p>
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif uppercase">
          Space
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* زر explore */}
      <div className="mt-20 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
        <button className="cursor-pointer w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full bg-white text-black uppercase text-lg md:text-xl lg:text-2xl font-serif tracking-wider hover:shadow-[0_0_0_60px_rgba(255,255,255,0.1)] transition-shadow">
          Explore
        </button>
      </div>
    </section>
  );
}

export default Home;
