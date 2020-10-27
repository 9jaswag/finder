import React from "react";
import Oval from "./Oval";

export default ({ fill = "#14213d", width, height }) => {
  return (
    <section className="loader">
      <Oval fill={fill} width={width} height={height} />
    </section>
  );
};
