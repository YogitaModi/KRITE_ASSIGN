import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Leftsecond = () => {
  const [vissible, setVissible] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([
    "Roadmap",
    "Feedback",
    "Performance",
    "Team",
    "Analytics",
  ]);

  const handleProduct = (e) => {
    if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
      setProducts([...products, product]);
      setProduct("");
    }
  };
  return (
    <div className="folders">
      <h6 className="folder">
        Folder<button className="btn">+</button>{" "}
      </h6>

      <div className="dropdown ">
        <button
          className="btn btn-secondary dropdown-toggle w-75 product"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Product
        </button>
        <ul className="dropdown-menu">
          {products &&
            products?.map((item) => (
              <>
                <li className="px-2" key={uuidv4()}>
                  {item}
                </li>
                <li key={uuidv4()}>
                  <hr className="dropdown-divider" />
                </li>
              </>
            ))}
          <button
            className="btn"
            onClick={() => {
              setAddItem(true);
            }}
          >
            + Add new sub
          </button>
          {addItem && (
            <input
              placeholder="add here"
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
              onKeyDown={handleProduct}
            />
          )}
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle product w-75"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sales
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle product w-75"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Design
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle product w-75"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Office
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftsecond;
