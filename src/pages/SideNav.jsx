import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
      <h1 className="text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill text-2xl mr-3"></i>
        <span className="text-xl sm:text-2xl hidden lg:inline-block">
          Date <span className="text-[#6556CD]">Night</span>
        </span>
        <span className="text-2xl lg:hidden">
          d<span className="text-[#6556CD]">N</span>
        </span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-md sm:text-xl sm:gap-3 gap-2">
        <h1 className="text-white font-semibold sm:text-xl text-md mt-10 mb-5">
          New Feeds
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg sm:p-5 p-1 duration-300">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg sm:p-5 p-1 duration-300">
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg sm:p-5 p-1 duration-300">
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg sm:p-5 p-1 duration-300">
          Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg sm:p-5 p-1 duration-300">
          People
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
