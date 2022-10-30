import React, { memo } from "react";
import IconLogo from "~/assets/svg/icon_logo";
import HeaderLeftWrapper from "./style";

const HeaderCenter = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className="logo">
        <IconLogo></IconLogo>
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderCenter;
