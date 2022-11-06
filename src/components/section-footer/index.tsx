import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import IconMoreArrow from "~/assets/svg/icon-more-arrow";
import { SectionFooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;
  let msg = "显示全部";
  if (name) {
    msg = `显示全部${name}房源`;
  }
  // 跳转逻辑

  const navigate = useNavigate()
  function handleMoreClick() {
    navigate('/entire')
  }
  return (
    <SectionFooterWrapper color={name ? "#00848a" : "#000"}>
      <div className="info" onClick={handleMoreClick}>
        <span className="text">{msg}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
