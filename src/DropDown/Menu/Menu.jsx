import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Menu = ({ item }) => {
  return (
    <ul className="menu">
      {item.submenu.map((item, i) => (
        <li key={i} className="menu_list">
          <div className="nav_menu">
            {item.submenu && (
              <span className="icon">
                <MdKeyboardArrowLeft />
              </span>
            )}
            <a href={item.path}>{item.title}</a>
            {item.submenu && (
              <span className="icon2">
                <IoIosArrowDown />
              </span>
            )}
          </div>
          {item.submenu && (
            <>
              <ul className="sub_menu">
                {item.submenu.map((sub, i) => (
                  <li key={i}>
                    <a href={sub.path}>{sub.title}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
