// show all, completed, todo
import React from "react";

// this is used to get the menu items we want to display
// - not an action type, more ofa constant - defines name of menu items
import { MENU_ITEMS } from "../constants/constants";

export const TodoMenu = ({ activeItem, onClick }) => {
  return (
    <nav className="menu">
      {Object.keys(MENU_ITEMS).map(i => {
        // get the menu item name
        const menuItem = MENU_ITEMS[i];
        return (
          <li
            key={`menu-item_${menuItem}`}
            onClick={() => {
              onClick(menuItem);
            }}
            className={activeItem === menuItem ? "active" : "inactive"}
          >
            {menuItem}
          </li>
        );
      })}
    </nav>
  );
};
