import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./cpns/home-banner";
import { HomeWrapper } from "./style";
import { changeHighScoreInfo, fetchHomeData } from "@/store/modules/home";
import HomeSection from "./cpns/home-section";
import LongFor from "./cpns/home-longfor";
import HomeSectionSelector from "./cpns/home-section-selector";
import { isEmpty } from "~/utils";
import HomePlus from "./cpns/home-plus";
const Home = memo(() => {
  console.log("加载首页啦");

  // redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    homePlusData,
    longfor,
    discountList,
    hotRecommend,
  } = useSelector(
    (state: any) => ({
      goodPriceInfo: state.home.goodPrice,
      highScoreInfo: state.home.highScoreInfo,
      discountList: state.home.discountList,
      hotRecommend: state.home.hotRecommend,
      longfor: state.home.longForData,
      homePlusData: state.home.homePlus,
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
        {isEmpty(discountList) && (
          <HomeSectionSelector discountData={discountList} />
        )}
        {isEmpty(hotRecommend) && (
          <HomeSectionSelector discountData={hotRecommend} />
        )}
        {isEmpty(longfor) && <LongFor longfor={longfor} />}
        <HomeSection infoData={goodPriceInfo} />
        <HomeSection infoData={highScoreInfo} />
        {isEmpty(longfor) && <HomePlus infoData={homePlusData} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
