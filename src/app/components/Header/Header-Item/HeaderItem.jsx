import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./HeaderItem.scss";

export function HeaderItem(props) {
  return (
    <Link
      to={`/#${props.linkName}`}
      scroll={el => el.scrollIntoView({ behavior: "smooth" })}
      className={`page-header__nav-link ${
        props.isSelected ? "selected" : null
      }`}
    >
      {props.label}
    </Link>
  );
}
