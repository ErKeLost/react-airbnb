import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);
  function changeItem(item: any) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      const index = newItems.findIndex((itemLi) => itemLi === item);
      newItems.splice(index, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              onClick={() => changeItem(item)}
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
