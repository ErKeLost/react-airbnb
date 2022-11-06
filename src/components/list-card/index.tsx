import PropTypes from "prop-types";
import React, { memo } from "react";
import ItemCard from "../item-card";
import { ListCardWrapper } from "./style";

const ListCard = memo((props) => {
  const { listData = [], itemWidth } = props;
  return (
    <ListCardWrapper
      className="room-list list"
      style={{ display: "flex", flexWrap: "wrap", margin: "0 -8px" }}
    >
      {listData?.slice(0, 8)?.map((item: any) => {
        return <ItemCard itemWidth={itemWidth} itemData={item} key={item.id} />;
      })}
    </ListCardWrapper>
  );
});

ListCard.propTypes = {
  listData: PropTypes.array,
  isHot: PropTypes.bool,
  itemWidth: PropTypes.string,
};

export default ListCard;
