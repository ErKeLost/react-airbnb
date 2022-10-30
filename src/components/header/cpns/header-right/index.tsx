import React, { memo } from "react";
import HeaderRightWrapper from "./style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import IconGlobal from "~/assets/svg/icon_global";
import IconMenu from "~/assets/svg/icon_menu";
import IconAvatar from "~/assets/svg/icon_avatar";
const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <div className="button">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <IconButton className="btnIcon">
          <IconGlobal />
        </IconButton>
      </div>
      <div className="profile">
        <IconMenu />
        <IconAvatar />
        <div className="panel">
          <div className="top">
            <div className="register">注册</div>
            <div className="login">登录</div>
          </div>
          <div className="bottom">
            <div className="house">出租房源</div>
            <div className="source">开展体验</div>
            <div className="help">帮助</div>
          </div>
        </div>
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
