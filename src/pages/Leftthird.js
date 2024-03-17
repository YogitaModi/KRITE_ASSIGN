import React from "react";

const Leftthird = () => {
  return (
    <div>
      <div class="list-group-flush">
        <button
          type="button"
          class="list-group-item list-group-item-action "
          aria-current="true"
        >
          The current button
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          A second button item
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          A third button item
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          A fourth button item
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          A disabled button item
        </button>
      </div>
    </div>
  );
};

export default Leftthird;
