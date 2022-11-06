import PropTypes from "prop-types";
import React, { memo } from "react";
import LangForItem from "~/components/longfor-item";
import ScrollView from "~/components/scroll-view";
import SectionHeader from "~/components/section-header";
import { LangForWrapper } from "./style";

const LangFor = memo((props) => {
  const { longfor } = props;
  return (
    <LangForWrapper>
      <SectionHeader title={longfor.title} subTitle={longfor.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {longfor?.list.map((item) => {
            return <LangForItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </LangForWrapper>
  );
});

LangFor.propTypes = {
  longfor: PropTypes.object,
};

export default LangFor;
