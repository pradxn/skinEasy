import { useState } from "react";

import "./SebaTest.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function SebaTest() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default SebaTest;