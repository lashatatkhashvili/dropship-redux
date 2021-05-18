import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ slug, toggleNav, children }) {
  return (
    <li className={window.location.pathname === `/${slug}` ? "nav-border" : ""}>
      <div className="item-wrapper">
        <p>{slug}</p>
        <Link to={`/${slug}`} className="link" onClick={toggleNav}>
          {children}
        </Link>
      </div>
    </li>
  );
}
