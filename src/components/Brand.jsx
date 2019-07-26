import React from "react";

import "./brand.css";

export default class Brand extends React.Component {
  render() {
    return (
      <div className="box-logo container">
        <div className="animated-icon">
          <svg className="loading" widht="100" height="100" viewBox="0 0 40 60">
            <polygon
              fill="none"
              stroke="#fff"
              stroke-width="7"
              points="16,1 32,32 1,32"
            />
          </svg>
        </div>

        <h3 className="title">accenture</h3>
      </div>
    );
  }
}
