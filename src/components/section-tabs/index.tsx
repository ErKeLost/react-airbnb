import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { SectionTabsWrapper } from "./style";
import classNames from 'classnames'
import { Button } from "@mui/material";
const SectionTabs = memo((props) => {
  const { tabNames, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function itemClick(item, index) {
    setCurrentIndex(index);
    tabClick(index, item)
  }
  return (
    <SectionTabsWrapper>
      {tabNames?.map((item, index) => {
        return (
          <button
            key={item}
            className={classNames("item", { active: index === currentIndex })}
            onClick={(e) => itemClick(item, index)}
          >
            {item}
          </button>
        );
      })}
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
