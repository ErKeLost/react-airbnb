import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import ListCard from "~/components/list-card";
import SectionFooter from "~/components/section-footer";
import SectionHeader from "~/components/section-header";
import SectionTabs from "~/components/section-tabs";
import { HomeSectionSelectorWrapper } from "./style";
const HomeSectionSelector = memo((props) => {
  const { discountData } = props;
  const tabNames = discountData?.dest_address?.map((item) => {
    return item.name;
  });
  const [name, setName] = useState(tabNames?.[0]);
  const tabClick = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <HomeSectionSelectorWrapper>
      <div className="discount">
        <SectionHeader
          title={discountData.title}
          subTitle={discountData.subtitle}
        />
        <SectionTabs tabNames={tabNames} tabClick={tabClick} />
        <ListCard
          itemWidth="33.33%"
          listData={discountData.dest_list?.[name]}
        />
        <SectionFooter name={name} />
      </div>
    </HomeSectionSelectorWrapper>
  );
});

HomeSectionSelector.propTypes = {
  discountData: PropTypes.object,
};

export default HomeSectionSelector;
