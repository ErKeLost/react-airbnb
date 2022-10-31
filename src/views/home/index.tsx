import React, { memo, useEffect, useState } from "react";
import HomeBanner from "./cpns/home-banner";
import { HomeWrapper } from "./style";
const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  );
});

export default Home;
