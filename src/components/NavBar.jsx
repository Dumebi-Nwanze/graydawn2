import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi"; // Hamburger icon
import { HiX } from "react-icons/hi"; // Close icon

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [grandchildVisible, setGrandchildVisible] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
 

  const handleChildHover = () => {
    setGrandchildVisible(true);
  };

  const handleChildLeave = () => {
    setGrandchildVisible(false);
  };

  return (
    <nav className="w-full p-8 flex justify-between items-center shadow-lg top-0 bg-white z-50 fixed">
      <div>
        <Link onClick={()=>{
          if(mobileMenuOpen){
            toggleMobileMenu()
          }
          
        }} to="/" className="font-bold text-[#007BFF] text-2xl">
          Graydawn
        </Link>
      </div>
      <div className="hidden lg:flex-1 lg:block">
        <ul className="flex justify-center space-x-10">
          {navItems.map((item, index) => (
            <NavLink key={index} className=" relative group" to={item.path}>
              <p className="hover:text-[#007BFF] cursor-pointer">
                {item.title}
              </p>
              {item.hasChildren && (
                <ul className="absolute hidden group-hover:block bg-white w-[300px] rounded-lg">
                  {item.children.map((childItem, childIndex) => (
                    <NavLink
                      key={childIndex}
                      onMouseEnter={childItem.hasChildren && handleChildHover}
                      onMouseLeave={childItem.hasChildren && handleChildLeave}
                      className=" relative group  "
                      to={childItem.path}
                    >
                      {childItem.hasChildren ? (
                        <div className="p-4 flex justify-between items-center">
                          <p className="block  hover:text-[#007BFF]">
                            {childItem.title}
                          </p>
                          <HiChevronRight />
                        </div>
                      ) : (
                        <p className="block p-4 hover:text-[#007BFF]">
                          {childItem.title}
                        </p>
                      )}
                      {childItem.hasChildren && grandchildVisible && (
                        <ul className="absolute top-0 left-full ml-1  hidden group-hover:block bg-white w-[300px] rounded-lg">
                          {childItem.children.map((gchildItem, gchildIndex) => (
                            <li
                              onClick={() => {
                                if (childItem.sectionId) {
                                  const element = document.getElementById(
                                    childItem.sectionId
                                  );
                                  if (element) {
                                    // 👇 Will scroll smoothly to the top of the next section
                                    element.scrollIntoView({
                                      behavior: "smooth",
                                    });
                                  }
                                }
                              }}
                              className="block p-4 hover:text-[#007BFF]"
                              key={gchildIndex}
                            >
                              {gchildItem.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </NavLink>
                  ))}
                </ul>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="lg:hidden"> {/* Show on mobile */}
        <button
          onClick={toggleMobileMenu}
          
        >
          {mobileMenuOpen ? <HiX className="text-[#007BFF] text-2xl"/> : <HiMenuAlt2 className="text-[#007BFF] text-2xl"/>}
        </button>
        { (
          <div className={`fixed top-20 left-0 h-[90vh] w-screen bg-white z-50 p-4 flex flex-col items-center transition-transform duration-500 ${mobileMenuOpen?'translate-y-0':'translate-y-[-120%]'}`}>
            <ul>
              {navItems.map((item, index) => (
              
                  <NavLink
                  key={index}
                    className="hover:text-[#007BFF] cursor-pointer block text-center text-xl p-10"
                    to={item.path}
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </NavLink>
                  
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
