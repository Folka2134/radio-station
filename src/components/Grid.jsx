import React from "react";
import { presenters } from "../presenters";

import "../App.css";

const Grid = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 2xl:grid-cols-8 gap-1 2xl:gap-0 ">
      {presenters.map((presenter, keyId) => (
        <div
          key={keyId}
          className="flex flex-col justify-center h-44 rounded-xl"
        >
          <img
            className="image object-scale-down h-28 rounded-xl"
            src={presenter.image}
            alt="presenter"
          />
          <p className="text-xs whitespace-nowrap">{presenter.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
