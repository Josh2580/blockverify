import React from "react";
import data from "./data.json";

const MetaData = () => {
  //   console.log(data);

  return (
    <div>
      {data.data.map((info, idx) => (
        <div key={idx} className="flex pt-2 flex-wrap">
          <p className="">
            <span className="text-lg font-bold text-blue-950 ">
              {info.key}
              {": "}{" "}
            </span>
            <span className="text-lg font-semibold text-gray-950 ">
              {info.value}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetaData;
