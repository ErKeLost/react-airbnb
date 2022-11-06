import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionHeader from "~/components/section-header";
import { LangForItemWrapper } from "./style";

const LangForItem = memo((props) => {
  const { itemData } = props;
  return (
    <LangForItemWrapper>
      <div className="inner">
        <img className="cover" src={itemData.picture_url} alt="" />
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </LangForItemWrapper>
  );
});

LangForItem.propTypes = {
  itemData: PropTypes.object,
};

export default LangForItem;
