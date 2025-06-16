import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";

//-----------------------------
interface item {
  id: number;
  text: string;
  checked: boolean;
}
//-----------------------------

function App() {
  //Usestates
  const [items, setItems] = useState<item[]>([]);
  const [newItem, setNewItem] = useState("");
  const [searchText, setSearchText] = useState("");
  const API_URL = "data/Data.json";
  const [fetshError, setFetshError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Couldnt Reach the Data");
        const newList = await response.json();
        setItems(newList);
      } catch (err) {
        console.log((err as Error).message);
        setFetshError(true);
      } finally {
        //Simulating API delay
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    };
    fetchData();
  }, []);

  //Functions
  const addItem = async () => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newI: item = { id: id, text: newItem, checked: false };
    const newlist = [...items, newI];

    setItems(newlist);

    const postOption = {
      method: "POST",
      header: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(newI),
    };
    const results = await apiRequest(API_URL, postOption);
    console.log("add item to json: ", results);
  };
  const check = async (id: number) => {
    const newlist = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    console.log(id);

    setItems(newlist);

    const itemURL = `${API_URL}/${id}`;
    const updatedItem = items.filter((item) => item.id === id);
    const updateOption = {
      method: "PATCH",
      header: { Content_Type: "application/json" },
      body: JSON.stringify({ checked: !updatedItem[0].checked }),
    };
    console.log(updatedItem[0].checked);
    const results = await apiRequest(itemURL, updateOption);
    console.log("reults Update json: ", results);
  };

  const deleteItem = async (id: number) => {
    const newlist = items.filter((item) => item.id != id);
    setItems(newlist);
    const deletOption = {
      method: "DELETE",
    };
    const results = await apiRequest(`${API_URL}/${id}`, deletOption);
    console.log(results);
  };
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    setNewItem("");
    addItem();
  };
  //Render
  return (
    <>
      <div className="app">
        <Header />
        <Content
          items={items.filter((listItem) =>
            listItem.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          check={check}
          deleteItem={deleteItem}
          //Add item
          newItem={newItem}
          setNewItem={setNewItem}
          handleAddItem={handleAddItem}
          //Search
          searchText={searchText}
          setSearchText={setSearchText}
          //Error Handling
          fetshError={fetshError}
          isLoading={isLoading}
        />

        {!fetshError && <Footer items={items}></Footer>}
      </div>
    </>
  );
}

export default App;
