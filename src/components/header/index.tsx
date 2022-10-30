import React, { memo } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HeaderWrapper from "./style";
import HeaderLeft from "./cpns/header-center";
import HeaderCenter from "./cpns/header-left";
import HeaderRight from "./cpns/header-right";
const header = memo(() => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderLeft></HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
      </HeaderWrapper>
    </div>
  );
});

export default header;
