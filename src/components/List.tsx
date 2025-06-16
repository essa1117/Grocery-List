import React from "react";
import Item from "./Item";
import { Props } from "./itemInterface";

const List = ({ items, check, deleteItem }: Props) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            check={check}
            deleteItem={deleteItem}
            key={item.id}
          />
        ))}
      </ul>
      {items.length == 0 ? <h6>List is empty</h6> : null}
    </>
  );
};

export default List;
