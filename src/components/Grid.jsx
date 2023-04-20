import React from "react";
import { presenters } from "../presenters";

import "../App.css";

const Grid = () => {
  return (
    <div className="grid gap-3 grid-cols-3 lg:grid-cols-6  shadow-lg">
      {presenters.map((presenter, keyId) => (
        <div key={keyId} className="card flex flex-col">
          <img
            className="w-full h-52 object-cover object-top rounded-2xl"
            src={presenter.image}
            alt="presenter"
          />
          <p className="text-xs whitespace-nowrap flex-1 pt-2">
            {presenter.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
