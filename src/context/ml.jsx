import { useState, useContext, createContext } from "react";

const SearchmlContext = createContext();
const SearchmlProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    // name: "",
    // results: [],
    data:"",
  });

  return (
    <SearchmlContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchmlContext.Provider>
  );
};

// custom hook
const useMLsearch = () => useContext(SearchmlContext);

export { useMLsearch, SearchmlProvider };