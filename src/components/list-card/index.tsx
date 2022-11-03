import PropTypes from "prop-types";
import React, { memo } from "react";
import ItemCard from "../item-card";
import { ListCardWrapper } from "./style";

const ListCard = memo((props) => {
  const { listData = [] } = props;
  return (
    <ListCardWrapper className="room-list">
      {listData?.list?.slice(0, 8).map((item: any) => {
        return <ItemCard itemData={item} key={item.id} />;
      })}
    </ListCardWrapper>
  );
});

ListCard.propTypes = {
  listData: PropTypes.object,
};

export default ListCard;
