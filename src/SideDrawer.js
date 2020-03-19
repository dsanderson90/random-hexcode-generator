import React from 'react'

const SideDrawer = () => {

    const handleClick = (e) => console.log(e.target)
    return (
        <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-bold text-xl">Menu Icon</span>
          </div>
    
          <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="text-sm sm:flex-grow">

            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
                >Login</a
              >
            </div>
          </div>
        </nav>
        <div className="w-56 absolute left-0 top-0 h-full bg-orange-600">
<div className="pl-8 py-6 font-bold"><span className="px-2"><button onClick={handleClick} href="">BACK</button></span>JAMIE BURNES</div>
<div className="flex-col flex-grow text-center">
<hr className="py-2"/>
    <div>Home</div>
    <div>Bio</div>
    <div>Portfolio</div>
    <div>Show Announcement</div>
    <div>Recent Articles</div>
        </div>
</div>
      
    


    </div>
    )
}

export default SideDrawer
