import React from "react";
//-----------------------------
interface Props {
  searchText: string;
  setSearchText: (searchText: string) => void;
}
//-----------------------------

const Search = ({ searchText, setSearchText }: Props) => {
  return (
    <>
      <form className="search" onClick={(e) => e.preventDefault()}>
        <label htmlFor="searchBox">Search Item</label>
        <input
          className="search"
          placeholder="Search Item"
          type="text"
          id="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Search;
