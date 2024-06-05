import { TiArrowRightThick } from "react-icons/ti";
import logo from "../assets/payd.png";

export default function Navbar() {
  return (
    <div
      className="flex bg-background py-4"
      style={{ position: "sticky", top: 0 }}
    >
      <div className="hidden md:flex flex-1 items-center justify-center">
        <form action="" className="flex h-fit mx-2">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-xl border-0 py-3 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="search..."
          />
        </form>
      </div>
      <div className="flex flex-1 items-center justify-center py-1">
        <a href="/">
          <img src={logo} alt="payd_logo" />
        </a>
      </div>
      <div className="hidden md:flex flex-1 items-center">
        <div className="w-full flex items-center justify-center h-fit">
          <a href="/posts" className="text-white flex gap-x-2">
            <span>
              <b>Blog:</b>
            </span>
            <p className="underline">See what is New</p>
            <div className="flex items-center">
              <TiArrowRightThick />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
