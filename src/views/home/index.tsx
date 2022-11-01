import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeData } from "@/store/modules/home";
const Home = memo(() => {
  // redux中获取数据
  const { goodPriceInfo } = useSelector(
    (state: any) => ({
      goodPriceInfo: state.home.goodPrice,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeData());
  }, []);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <h2>{goodPriceInfo?.title}</h2>
        <div>
          {goodPriceInfo?.list?.map((item: any) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
