import UserDropdown from "../../components/Dropdowns/UserDropdown";
import React from "react";

const Header = () => {
  return (
    <>
      {/* Header */}
       <nav className="bg-teal-500 md:pt-20  p-8 mb-12 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <a
            className="text-white text-m uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          
           {/* User */}
           <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
          </div>
        </nav>
    </>
  );
}

export default Header
