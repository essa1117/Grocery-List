import React, { FormEvent } from "react";

//-----------------------------
interface props {
  newItem: string;
  setNewItem: (newItem: string) => void;
  handleAddItem: (e: FormEvent) => void;
}
//-----------------------------

const AddItem = ({ newItem, setNewItem, handleAddItem }: props) => {
  return (
    <form name="Add" onSubmit={handleAddItem}>
      <label htmlFor="add">Add Item</label>
      <input
        autoFocus={true}
        id="add"
        type="text"
        placeholder="Insert Item..."
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">Insert</button>
    </form>
  );
};

export default AddItem;
