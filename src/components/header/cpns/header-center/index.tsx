import React, { memo } from "react";
import IconSearchBar from "~/assets/svg/icon-search-bar";
import HeaderCenterWrapper from "./style";

const HeaderLeft = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <span className="icon">
          <IconSearchBar />
        </span>
      </div>
    </HeaderCenterWrapper>
  );
});

export default HeaderLeft;
