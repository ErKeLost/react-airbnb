import PropTypes from "prop-types";
import React, { memo } from "react";
import ItemCard from "~/components/item-card";
import ScrollView from "~/components/scroll-view";
import SectionHeader from "~/components/section-header";
import { PlusWrapper } from "./style";

const HomePlus = memo((props) => {
  const { infoData } = props;

  return (
    <PlusWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="root-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return (
              <ItemCard
                itemWidth="20%"
                itemData={item}
                key={item.id}
              ></ItemCard>
            );
          })}
        </ScrollView>
      </div>
    </PlusWrapper>
  );
});

HomePlus.propTypes = {
  infoData: PropTypes.object,
};

export default HomePlus;
