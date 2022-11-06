import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import IconArrowLeft from "~/assets/svg/icon-arrow-left";
import IconArrowRight from "~/assets/svg/icon-arrow-right";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  // 监听组件渲染完毕
  // ref 可以在组件多次渲染得时候保持得一样的值
  const scrollContentRef = useRef();
  const distanceNumber = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const distance = scrollWidth - clientWidth;
    distanceNumber.current = scrollWidth - clientWidth;
    setShowRightBtn(distance > 0);
  }, [props.children]);
  function rightClick() {
    controlHandler(1);
  }
  function leftClick() {
    controlHandler(-1);
  }
  function controlHandler(flag) {
    const index = posIndex + flag;
    const el = scrollContentRef.current.children[index];
    const offsetLift = el.offsetLeft;
    console.log(offsetLift);
    scrollContentRef.current.style.transform = `translate(-${offsetLift}px)`;
    setPosIndex(index);
    setShowRightBtn(distanceNumber.current > offsetLift);
    setShowLeftBtn(offsetLift > 0);
  }
  return (
    <ScrollViewWrapper>
      {showLeftBtn && (
        <div className="control left" onClick={leftClick}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className="control right" onClick={rightClick}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="slot" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
