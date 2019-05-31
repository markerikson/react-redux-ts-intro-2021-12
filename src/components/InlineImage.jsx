import React from "react";

export const InlineImage = ({src, width, height}) => (
    <div style={{display : "inline-flex", height : "100%", alignItems : "center"}}>
      <img src={src} height={height} width={width} alt="" />
    </div>
)