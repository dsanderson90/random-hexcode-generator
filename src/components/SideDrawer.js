import React, { useState } from "react";
import classNames from "classnames";
import "font-awesome/css/font-awesome.min.css";
const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = e => setIsOpen(!isOpen);
  const style = { color: "teal" };
  let sideBarClass = classNames({
    hidden: !isOpen,
    block: isOpen
  });
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-yellow-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-xl">
            <button onClick={handleClick} className="p-5">
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-row mr-16">
          <div className="bg-indigo-500">
            <a className="m-0 p-0" href="mailto:jamie@jamieburnes.com">
              <i className="fa fa-envelope-o pr-2"></i>
              <span className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">
                jamie@jamieburnes.com
              </span>
            </a>
          </div>
          <div className="bg-indigo-500">
            <a
              href="https://www.instagram.com/jamieburnessculpture/"
              target="_blank"
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              <i className="fa fa-instagram pr-2"></i>
              Instagram
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`${sideBarClass} absolute w-64 left-0 top-0 h-full bg-yellow-500`}
      >
        <div className="ml-8 py-5 font-bold">
          <button className="pr-4" onClick={handleClick}>
            <i className="fa fa-arrow-left"></i>
          </button>
          <span className="px-3">JAMIE BURNES</span>
        </div>
        <div className="flex-col flex-grow text-center">
          <hr />
          <div className="hover:bg-white py-4">Home</div>
          <div className="hover:bg-white py-4">Bio</div>
          <div className="hover:bg-white py-4">Portfolio</div>
          <div className="hover:bg-white py-4">Show Announcement</div>
          <div className="hover:bg-white py-4">Recent Articles</div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
