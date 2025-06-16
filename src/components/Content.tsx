import { FormEvent } from "react";
import AddItem from "./AddItem";
import List from "./List";
import "./css/content.css";
import { Props } from "./itemInterface";
import Search from "./Search";

//---------------------------------
interface props extends Props {
  newItem: string;
  setNewItem: (newItem: string) => void;
  handleAddItem: (e: FormEvent) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  fetshError: boolean;
  isLoading: boolean;
}
//---------------------------------
const Content = ({
  items,
  check,
  deleteItem,
  newItem,
  setNewItem,
  handleAddItem,
  searchText,
  setSearchText,
  fetshError,
  isLoading,
}: props) => {
  return (
    <>
      <div className="content">
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleAddItem={handleAddItem}
        />
        <Search searchText={searchText} setSearchText={setSearchText} />
        {fetshError && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "33px",
            }}
          >
            Cant finde the data
          </p>
        )}
        {isLoading && (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "33px",
            }}
          >
            Loading Items...
          </p>
        )}
        {!fetshError && !isLoading && (
          <List items={items} check={check} deleteItem={deleteItem} />
        )}
      </div>
    </>
  );
};

export default Content;
