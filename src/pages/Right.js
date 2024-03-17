import React from "react";
import { useState } from "react";
import Navba from "./Navba";
import Profile from "./Profile";
import { useSort } from "../context/Sortcontext";
import { v4 as uuidv4 } from "uuid";
import { useSearch } from "../context/Searchcontext";

const Right = () => {
  const [sorting, setSorting] = useSort();

  const [search, setSearch] = useSearch();
  const [item, setItem] = useState({
    Brand: "",
    Description: "",
    Members: "",
    Next_Meeting: "",
  });

  // category setup
  const [Categories, setCategories] = useState([]);
  const [Category, setCategory] = useState("");
  const handleCategory = (e) => {
    if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
      setCategories([...Categories, Category]);
      setCategory("");
    }
  };

  // tags setup
  const [Tags, setTags] = useState([]);
  const [Tag, setTag] = useState("");
  const handleTag = (e) => {
    if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
      setTags([...Tags, Tag]);
      setTag("");
    }
  };

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const [tab, setTab] = useState([
    {
      Brand: "Wix",
      Description: "",
      Members: "",
      Categories: ["Automation"],
      Tags: ["#Digitaltransformation"],
      Next_Meeting: "Tomorrow",
    },

    {
      Brand: "Shopify",
      Description: "",
      Members: "",
      Categories: ["E-commerce", "B2B"],
      Tags: ["#onlineshopping", "#netbanking"],
      Next_Meeting: "Tomorrow",
    },
    {
      Brand: "MailChirrp",
      Description: "",
      Members: "",
      Categories: ["SAAS", "Mobile"],
      Tags: ["#technovation"],
      Next_Meeting: "in a hour",
    },
    {
      Brand: "Paypal",
      Description: "",
      Members: "",
      Categories: ["Marketplace"],
      Tags: [],
      Next_Meeting: "Tomorrow",
    },
    {
      Brand: "Disney",
      Description: "",
      Members: "",
      Categories: ["B2B", "B2C"],
      Tags: [],
      Next_Meeting: "Next Month",
    },
    {
      Brand: "Intercom",
      Description: "",
      Members: "",
      Categories: ["Technology", "SAAS"],
      Tags: ["#"],
      Next_Meeting: "",
    },
    {
      Brand: "Google",
      Description: "",
      Members: "",
      Categories: ["Finance", "Automation"],
      Tags: ["#"],
      Next_Meeting: "No contact",
    },
    {
      Brand: "Evernote",
      Description: "",
      Members: "",
      Categories: ["Transportation"],
      Tags: ["#"],
      Next_Meeting: "Next month",
    },
    {
      Brand: "Microsoft",
      Description: "",
      Members: "",
      Categories: ["Publishind", "B2C"],
      Tags: ["#"],
      Next_Meeting: "in 30 minutes",
    },
    {
      Brand: "Invision",
      Description: "",
      Members: "",
      Categories: ["Web Service"],
      Tags: ["#"],
      Next_Meeting: "Next Month",
    },
  ]);

  const handleAdd = (e) => {
    e.preventDefault();
    setTab([...tab, { ...item, Categories, Tags }]);
    if (sorting.length !== 0) setTab(sorting);
  };

  const handleSearch = () => {
    if (search !== "") {
      let index = tab.findIndex(function (obj, index) {
        return obj.Brand === search;
      });

      setTab([tab[index]]);
    }
  };
  return (
    <div>
      <div className="search">
        <h4>Products</h4>
        <div className="search-item">
          <input
            placeholder="search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
          <button
            className="btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            All items
          </button>{" "}
        </div>
      </div>
      <Navba value={tab} />
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">
              Brand
              <span>
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  +
                </button>
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Add
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form className="row g-3" onSubmit={handleAdd}>
                          <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                              Brand
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail4"
                              name="Brand"
                              value={item.Brand}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="inputPassword4"
                              className="form-label"
                            >
                              Description
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              name="Description"
                              value={item.Description}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="inputAddress"
                              className="form-label"
                            >
                              Members
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress"
                              name="Members"
                              value={item.Members}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="inputAddress2"
                              className="form-label"
                            >
                              Categories
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress2"
                              name="Category"
                              value={Category}
                              onChange={(e) => {
                                setCategory(e.target.value);
                              }}
                              onKeyDown={handleCategory}
                            />
                            <h6>type and press space for adding </h6>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                              Tags
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputCity"
                              name="Tags"
                              value={Tag}
                              onChange={(e) => {
                                setTag(e.target.value);
                              }}
                              onKeyDown={handleTag}
                            />
                            <h6>type and press space for adding </h6>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                              Next Meeting
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputCity"
                              name="Next_Meeting"
                              value={item.Next_Meeting}
                              onChange={onChange}
                            />
                          </div>

                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleAdd}
                            >
                              Add
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </th>
            <th scope="col">Description</th>
            <th scope="col">Members</th>
            <th scope="col">Categories</th>
            <th scope="col">Tags</th>
            <th scope="col">Next Meeting</th>
          </tr>
        </thead>
        <tbody>
          {tab &&
            tab?.map((item) => (
              <tr key={uuidv4()}>
                <th scope="row">{item.Brand}</th>
                <td>{item.Description}</td>
                <td>{item.Members}</td>
                <td>
                  {item.Categories?.map((i) => (
                    <td>
                      <span className="category">{i}</span>
                    </td>
                  ))}
                </td>
                <td key={uuidv4()}>
                  {item.Tags?.map((i) => (
                    <td key={uuidv4()}>
                      <span className="tags">{i}</span>
                    </td>
                  ))}
                </td>

                <td key={uuidv4()}>
                  <span className="timing">{item.Next_Meeting}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h6>{tab.length} count</h6>
    </div>
  );
};

export default Right;
