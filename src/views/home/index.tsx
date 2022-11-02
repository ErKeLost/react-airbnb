import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeData } from "@/store/modules/home";
import SectionHeader from "~/components/section-header";
import ItemCard from "~/components/item-card";
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
        <div className="goodPrice">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <div className="room-list">
            {goodPriceInfo?.list?.slice(0, 8).map((item: any) => {
              return <ItemCard itemData={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
