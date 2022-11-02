import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { ItemWrapper } from "./style";

const ItemCard = memo((props) => {
  const { itemData } = props;
  const [value, setValue] = useState(2);
  return (
    <ItemWrapper verifyColor={itemData.verify_info.text_color || "#39576a"}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">$ {itemData.price} / 晚</div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ fontSize: "14px" , color:"#00848a"}}
        />
      </div>
    </ItemWrapper>
  );
});

ItemCard.propTypes = {
  itemData: PropTypes.object,
};

export default ItemCard;
