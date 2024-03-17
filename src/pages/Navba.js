import React from "react";
import { useSort } from "../context/Sortcontext";
import { v4 as uuidv4 } from "uuid";

const Navba = ({ value }) => {
  const [sorting, setSorting] = useSort();

  const handleSort = () => {
    const arr = value.sort((a, b) =>
      a.Brand > b.Brand ? 1 : b.Brand > a.Brand ? -1 : 0
    );
    setSorting(arr);
  };

  return (
    <div className="menus">
      <div className="dropdown drop">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Brand
        </button>
        <ul className="dropdown-menu ">
          {value?.map((item) => (
            <>
              <li key={uuidv4()}>{item.Brand}</li>
              <li key={uuidv4()}>
                <hr className="dropdown-divider" />
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="dropdown drop">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Desc
        </button>
        <ul className="dropdown-menu">
          {value?.map((item) => (
            <>
              <li key={uuidv4()}>{item.Description}</li>
              <li key={uuidv4()}>
                <hr className="dropdown-divider" />
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="dropdown drop">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Tags
        </button>
        <ul className="dropdown-menu">
          {value?.map((item) => (
            <>
              <li key={uuidv4()}>{item.Tags}</li>
              <li key={uuidv4()}>
                <hr className="dropdown-divider" />
              </li>
            </>
          ))}
        </ul>
      </div>
      <button className="btn btn-secondary  m-1 sort" onClick={handleSort}>
        Sort
      </button>
      <button className="btn btn-secondary  m-1 sort">Filter</button>
    </div>
  );
};

export default Navba;
