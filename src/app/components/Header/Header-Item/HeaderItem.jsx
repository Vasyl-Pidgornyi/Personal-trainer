import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./HeaderItem.scss";

export function HeaderItem(props) {
  if (props.openNewPage) {
    return (
      <Link
        to={`/${props.linkName}`}
        className={`page-header__nav-link ${
          props.isSelected ? "selected" : null
        }`}
      >
        {props.label}
      </Link>
    );
  } else {
    return (
      <HashLink
        to={`/#${props.linkName}`}
        scroll={el => el.scrollIntoView({ behavior: "smooth" })}
        className={`page-header__nav-link ${
          props.isSelected ? "selected" : null
        }`}
      >
        {props.label}
      </HashLink>
    );
  }
}
