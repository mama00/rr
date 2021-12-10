import React, { useState } from "react";

export default function SwipeableDrawerView({ style, children, open }) {
  const defaultStyle = {
    container: {
      height: open ? "100%" : "55%",
      width: "100vw",
      position: "absolute",
      top: open ? "0" : "50vh",
      backgroundColor: "#555C6D",
    },
  };
  return (
    <div
      className="swiper-drawer-view"
      style={{ ...defaultStyle.container, ...style }}
    >
      {React.cloneElement(children, {
        swiperOpen: open,
      })}
    </div>
  );
}
