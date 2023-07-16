import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const SubMenu = ({ menu }) => {
  return (
    <ul className="menu">
      {menu.subMenu.map((sub, i) => (
        <li key={i} className="menu_list">
          <div className="nav_menu">
            {sub.subMenu && (
              <span className="icon">
                <MdKeyboardArrowLeft />
              </span>
            )}
            <a href={sub.path}>{sub.title}</a>
            {sub.subMenu && (
              <span className="icon2">
                <IoIosArrowDown />
              </span>
            )}
          </div>

          {sub.subMenu && (
            <>
              <ul className="sub_menu">
                {sub.subMenu.map((menu, i) => (
                  <li key={i}>
                    <a href={menu.path}>{menu.title}</a>
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

export default SubMenu;
