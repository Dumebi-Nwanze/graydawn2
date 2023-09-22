import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";

function NavBar() {
  const [grandchildVisible, setGrandchildVisible] = useState(false);

  const handleChildHover = () => {
    setGrandchildVisible(true);
  };

  const handleChildLeave = () => {
    setGrandchildVisible(false);
  };
  return (
    <nav className="w-full p-8 flex justify-between items-center shadow-lg  top-0 bg-white z-50 fixed">
      <div>
        <Link to="/" className="font-bold text-[#007BFF] text-2xl">
          Graydawn
        </Link>
      </div>
      <div className="flex-1">
        <ul className="flex justify-center space-x-10 ">
          {navItems.map((item, index) => (
            <NavLink key={index} className=" relative group  " to={item.path}>
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
    </nav>
  );
}

export default NavBar;
