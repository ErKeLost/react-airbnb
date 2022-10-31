import React, { memo, useEffect, useState } from "react";
import HeaderRightWrapper from "./style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import IconGlobal from "~/assets/svg/icon_global";
import IconMenu from "~/assets/svg/icon_menu";
import IconAvatar from "~/assets/svg/icon_avatar";
const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener('click', windowHandleClick)
    }
  }, []);
  return (
    <HeaderRightWrapper>
      <div className="button">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <IconButton className="btnIcon">
          <IconGlobal />
        </IconButton>
      </div>
      <div className="profile" onClick={() => setShowPanel(true)}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
