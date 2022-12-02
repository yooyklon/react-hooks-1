import React from "react";

export default function List({ list, currentElement, changeElement }) {
  return (
    <ul className="list">
      {list.map((el) => (
        <li
          className={currentElement === el ? "list-item active" : "list-item"}
          onClick={() => changeElement(el)}
          key={el.id}
        >
          {el.name}
        </li>
      ))}
    </ul>
  );
}
