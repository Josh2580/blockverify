import React from "react";
import HeaderComp from "../components/HeaderComp";

import MetaData from "../components/MetaData";
import Verified from "../components/Verified";
import InfoImg from "../components/InfoImg";

const ResultPage = () => {
  return (
    <div className="h-svh flex flex-col gap-4 ">
      <div className="mt-3 ml-3">
        <HeaderComp />
      </div>
      <p className="font-bold text-blue-950 text-5xl text-center pb-3 ">
        Coca Cola
      </p>
      <div className="flex flex-col gap-5 sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-4/6 xl:w-7/12 2xl:w-6/12 ">
        <div className="flex items-center justify-between gap-4">
          <InfoImg />
          <Verified />
        </div>
        <div className="flex-1">
          <MetaData />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
