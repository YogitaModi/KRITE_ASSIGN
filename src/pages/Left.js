import React from "react";
import { useState } from "react";

const Left = () => {
  const [vissible, setVissible] = useState(false);
  const [team, setTeam] = useState("");
  const [point, setPoint] = useState("");
  const [teams, setTeams] = useState([
    { team: "Design Team", point: "x+1" },
    { team: "Marketing Team", point: "x+2" },
    { team: "Developement Team", point: "x+3" },
  ]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (team !== "" || point !== "") setTeams([...teams, { team, point }]);
    setVissible(false);
  };
  return (
    <>
      <div className="list-group m-2">
        {teams?.map((item) => (
          <button
            type="button"
            className="list-group-item list-group-item-action team"
            aria-current="true"
          >
            {item.team}
            <span class="badge text-bg-light">{item.point}</span>
          </button>
        ))}
      </div>
      <button
        className="btn btn-light w-100 p-1"
        onClick={() => {
          setVissible(true);
        }}
      >
        + Create a team
      </button>
      {vissible && (
        <form onSubmit={handleAdd}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Team
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={team}
              onChange={(e) => {
                setTeam(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Point
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={point}
              onChange={(e) => {
                setPoint(e.target.value);
              }}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </form>
      )}
    </>
  );
};

export default Left;
