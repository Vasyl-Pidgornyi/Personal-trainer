import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./HeaderItem.scss";

export function HeaderItem({ item, showMenuHandler }) {
  if (item.openNewPage) {
    return (
      <Link
        onClick={() => showMenuHandler(false)}
        to={`/${item.linkName}`}
        className={`page-header__nav-link ${
          item.isSelected ? "selected" : null
        }`}
      >
        {item.label}
      </Link>
    );
  } else {
    return (
      <HashLink
        onClick={() => showMenuHandler(false)}
        to={`/#${item.linkName}`}
        scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
        className={`page-header__nav-link ${
          item.isSelected ? "selected" : null
        }`}
      >
        {item.label}
      </HashLink>
    );
  }
}
