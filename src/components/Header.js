import React from "react";
import lincsLogo from "../images/lincs-stacked-logo.png";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <div id="header" className={styles.headerContainer}>
      <img src={lincsLogo} alt="" className={styles.heroImage} />
      <h1>LINCS Work Term Report for S22 & F22</h1>
    </div>
  );
}

export default Header;
