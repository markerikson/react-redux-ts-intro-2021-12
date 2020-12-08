import React, { useState } from "react";
import classnames from "classnames";
import styles from "./StylingExample.module.css";

function StylingExample(props) {
  const [isActive, setIsActive] = useState(false);

  const contentClassname = classnames("fixed-class", {
    active: isActive,
    inactive: !isActive,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        This has <span style={{ color: "red" }}>red text</span>
      </div>
      <button className="btn btn-primary">Click Me</button>
      <div className={contentClassname}>Some content here</div>
      <div className={styles.moreContent}>More content here</div>
    </div>
  );
}
