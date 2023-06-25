import React, { useState } from "react";
import "./DropDown.css";
import { dropMenu } from "./data";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Submenu from "./Submenu/Submenu";
import { FaBars, FaTimes } from "react-icons/fa";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="navbar">
        <h1 className="title">Logo</h1>
        {/* navigation part  */}
        <div className={`shadow ${open && "shadow_show"}`}>
          <ul className={`links ${open && "active"}`}>
            <div onClick={() => setOpen(false)} className="close_menu">
              <FaTimes />
            </div>
            {dropMenu.map((menu, i) => (
              <li
                key={i}
                className="sub_list"
                style={{ padding: menu.submenu ? "0.7rem 2rem" : "1rem 2rem" }}>
                <div className="link_text">
                  <a className="link" href={menu.path}>
                    {menu.title}
                  </a>
                  <span>{menu.submenu && <MdOutlineKeyboardArrowDown />}</span>
                </div>

                {/* submenu part  */}
                {menu.submenu && <Submenu menu={menu} />}
              </li>
            ))}
          </ul>
        </div>
        <span onClick={() => setOpen(true)} className="bar_menu">
          {<FaBars />}
        </span>
      </div>
    </header>
  );
};

export default DropDown;
