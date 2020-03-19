import React, { useState } from "react";
import classNames from "classnames";
const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = e => setIsOpen(!isOpen);
  let sideBarClass = classNames({
    hidden: !isOpen,
    block: isOpen
  });
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-yellow-100">
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
            <a href="mailto:jamie@jamieburnes.com">
              <span>jamie@jamieburnes.com</span>
            </a>
          </div>
          <div className="bg-indigo-500">
            <a
              href="https://www.instagram.com/jamieburnessculpture/"
              target="_blank"
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              Instagram
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`${sideBarClass} w-56 absolute left-0 top-0 h-full bg-yellow-100`}
      >
        <div className="pl-8 py-5 font-bold">
          <span className="px-2">
            <button onClick={handleClick} href="">
              BACK
            </button>
          </span>
          JAMIE BURNES
        </div>
        <div className="flex-col flex-grow text-center">
          <hr />
          <div className="py-4">Home</div>
          <div className="py-4">Bio</div>
          <div className="py-4">Portfolio</div>
          <div className="py-4">Show Announcement</div>
          <div className="py-4">Recent Articles</div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
