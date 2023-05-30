import React, { memo } from "react";

const Test = ({ name, children, count }) => {
  return (
    <div className="wrap">
      <div>name: {name}</div>
      <div>count: {count}</div>
      {children}
    </div>
  );
};

export default memo(Test);
