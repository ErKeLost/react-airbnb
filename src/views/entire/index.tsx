import React, { memo } from "react";
import EntireFilter from "./cpns/entire-filter";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className="filter">
        <EntireFilter />
      </div>
      <div className="rooms"></div>
      <div className="pagination"></div>
    </EntireWrapper>
  );
});

export default Entire;
