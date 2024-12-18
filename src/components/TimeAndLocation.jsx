import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className=" flex justify-center items-center my-6">
        <p className="text-white font-extralight md:text-xl text-sm">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className=" flex justify-center items-center my-3">
        <p className="text-white md:text-3xl text-xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
