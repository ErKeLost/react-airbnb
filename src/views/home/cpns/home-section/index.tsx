import PropTypes from "prop-types";
import React, { memo } from "react";
import ListCard from "~/components/list-card";
import SectionFooter from "~/components/section-footer";
import SectionHeader from "~/components/section-header";
import { HomeSectionWrapper } from "./style";

const HomeSection = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionWrapper>
      <div className="goodPrice">
        <SectionHeader
          title={infoData.title}
          subTitle={infoData.subtitle}
        ></SectionHeader>
        <div className="room-list">
          <ListCard listData={infoData.list}></ListCard>
        </div>
        <SectionFooter />
      </div>
    </HomeSectionWrapper>
  );
});

HomeSection.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSection;
