import React, { useState } from "react";

function SearchBar({ onSearch, searchTerm }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        searchTerm ? "fixed top-4 right-4 w-1/3" : "relative w-full"
      }`}
    >
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleInput}
        className="w-full mt-6 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}

export default SearchBar;
