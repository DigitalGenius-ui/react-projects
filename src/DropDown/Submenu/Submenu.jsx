import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Submenu.css";

const Submenu = ({ menu }) => {
  return (
    <ul className="submenu">
      {menu.submenu?.map((submenu, i) => (
        <li key={i} className="sub_list1">
          <div className="link_text">
            <a href={submenu.path}>{submenu.title}</a>
            <span style={{ color: "white" }}>
              {submenu.submenu && <MdOutlineKeyboardArrowRight />}
            </span>
          </div>
          {/* next sub menu  */}
          {submenu.submenu && (
            <ul className="submenu1">
              {submenu.submenu?.map((item, i) => (
                <li key={i}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
