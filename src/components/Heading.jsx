import React from "react";

function Heading({ bg }) {
  return (
    <>
      <h1 className="mb-4 font-extrabold leading-none tracking-tight md:text-5xl text-5xl text-white">
        Weather{" "}
        <mark className={`px-2 text-white rounded bg-blue-500 ${bg}`}>App</mark>
      </h1>
    </>
  );
}

export default Heading;
