import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2 text-2xl "></i>
        <span className="text-xl  ">
          Date <span className="text-[#6556CD]">Night</span>
        </span>
        {/* <span className="text-xl  mr-2">
          d<span className="text-[#6556CD] ml-1">N</span>
        </span> */}
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-2">
          New Feeds
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  py-3 px-5 duration-300">
          <i className="ri-fire-fill mr-2"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  py-3 px-5 duration-300">
          <i className="ri-bard-fill mr-2"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  py-3 px-5 duration-300">
          <i className="ri-movie-2-fill mr-2"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  py-3 px-5 duration-300">
          <i className="ri-tv-2-fill mr-2"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  py-3 px-5 duration-300">
          <i className="ri-user-search-fill mr-2"></i> People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-2" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold sm:text-xl text-md mt-10 mb-5">
          Website information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  py-3 px-5 duration-300">
          <i className="ri-information-fill mr-2"></i> About
          <span className="text-[#6556CD] font-semibold ml-1 hover:text-white">
            dN
          </span>
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  py-3 px-5 duration-300">
          <i className="ri-phone-fill mr-2"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
