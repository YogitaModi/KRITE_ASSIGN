import { useState, useContext, createContext } from "react";

const sortingContext = createContext();

const Soritngprovider = ({ children }) => {
  const [sorting, setSorting] = useState([]);

  return (
    <>
      <sortingContext.Provider value={[sorting, setSorting]}>
        {children}
      </sortingContext.Provider>
    </>
  );
};

const useSort = () => useContext(sortingContext);
export { useSort, Soritngprovider };
