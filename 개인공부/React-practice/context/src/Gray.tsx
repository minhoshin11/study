import React, { useContext } from "react";
import { DarkContext } from "./Context";

function Gray() {
  const { isDark } = useContext(DarkContext);

  return (
    <div
      style={{
        backgroundColor: isDark ? "lightGray" : "black",
        color: isDark ? "black" : "white",
      }}
    >
      나는 그레이인뎅
    </div>
  );
}

export default Gray;
