import React from "react";
import { FaTrash } from "react-icons/fa";
import { item } from "./itemInterface";

//-----------------------------
interface itemProps {
  item: item;
  check: (id: number) => void;
  deleteItem: (id: number) => void;
}
//-----------------------------

const Item = ({ item, check, deleteItem }: itemProps) => {
  return (
    <li className="item">
      <input
        type="checkBox"
        id={`ch${item.id}`}
        checked={item.checked}
        onChange={() => check(item.id)}
      />
      <label
        htmlFor={`ch${item.id}`}
        style={item.checked ? { textDecoration: "line-through" } : {}}
      >
        {item.text}
      </label>
      <FaTrash
        className="del"
        onClick={() => deleteItem(item.id)}
        role="button"
        aria-label="Delete Item"
      />
    </li>
  );
};

export default Item;
