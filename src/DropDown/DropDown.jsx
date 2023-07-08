import React, { useState } from "react";
import "./DropDown.css";
import { dropMenu } from "./data";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "./Menu/Menu";

const DropDown = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div
          className={`shadow ${openMenu && "active"}`}
          onClick={() => setOpenMenu(false)}></div>
        <ul className={`navigation ${openMenu && "active"}`}>
          <span className="close_menu" onClick={() => setOpenMenu(false)}>
            <FaTimes />
          </span>
          {dropMenu.map((item, i) => (
            <li key={i} className="list_menu">
              <div className="nav_menu">
                <a href={item.path}>{item.title}</a>
                {item.submenu && (
                  <span className="menu_icon">
                    <IoIosArrowDown />
                  </span>
                )}
              </div>
              {item.submenu && (
                <>
                  <div className="menu">
                    <Menu item={item} />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <span className="bar_menu" onClick={() => setOpenMenu(true)}>
          <FaBars />
        </span>
      </div>
    </header>
  );
};

export default DropDown;
