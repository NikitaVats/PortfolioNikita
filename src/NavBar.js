import React, { useState } from "react";
import "./NavBar.css";
const NavBar = ({ scrollToSection }) => {
  const menu = ["Home", "About", "Services", "Contact"];
  const fullArray = new Array(5).fill(false);
  const [isClicked, setIsClicked] = useState(new Array(5).fill(false));
  const onClickFunc = (index, menuItem) => {
    console.log(menuItem, index);
    const newArr = [...fullArray];
    newArr[index] = true;
    setIsClicked(newArr);
    scrollToSection(menuItem);
  };

  return (
    <div className="navbar">
      {menu.map((menuItem, index) => (
        <div
          className="menuItem"
          style={{
            border: isClicked[index] ? "1px solid black" : "",
            backgroundColor: isClicked[index] ? `cyan` : `white`,
            boxShadow: isClicked[index] ? "0px 0px 10px 3px rgba(0, 0, 0)" : "",
          }}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              onClickFunc(index, menuItem);
            }}
            href="#"
          >
            {menuItem}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
