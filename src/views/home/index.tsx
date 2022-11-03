import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./cpns/home-banner";
import { HomeWrapper } from "./style";
import { changeHighScoreInfo, fetchHomeData } from "@/store/modules/home";
import SectionHeader from "~/components/section-header";
import ItemCard from "~/components/item-card";
import ListCard from "~/components/list-card";
import HomeSection from "./cpns/home-section";
const Home = memo(() => {
  console.log("加载首页啦");

  // redux中获取数据
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state: any) => ({
      goodPriceInfo: state.home.goodPrice,
      highScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeSection infoData={goodPriceInfo} />
        <HomeSection infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
