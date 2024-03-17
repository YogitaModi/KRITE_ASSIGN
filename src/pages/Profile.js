import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action profile"
          aria-current="true"
        >
          <p className="initials">IH</p>
          <span>INC</span>
          <h4>InnovateHub</h4>
        </button>
      </div>
    </div>
  );
};

export default Profile;
