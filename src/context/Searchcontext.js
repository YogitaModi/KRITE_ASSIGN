import { useState, useContext, createContext } from "react";

const searchContext = createContext();

const Searchprovider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <searchContext.Provider value={[search, setSearch]}>
        {children}
      </searchContext.Provider>
    </>
  );
};

const useSearch = () => useContext(searchContext);
export { useSearch, Searchprovider };
