import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

//props.title
const MenuItem = (
  { title, imageUrl, size, history, linkUrl, match } //history available because of, withRouter(..)
) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${linkUrl}`)} //to do: instead of static url, use, match.url
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`, //javascript template string `$text text{variable}`
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem); //withRouter returns component with history.
