import React from "react";
import Card from "./Card";

function SearchResults({ results, onUserClick }) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {results?.map((result, index) => (
        <Card key={index} data={result} onClick={() => onUserClick(result)} />
      ))}
    </div>
  );
}

export default SearchResults;
