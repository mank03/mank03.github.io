import React from "react";
import styles from "../styles/styles.module.css";

function Intro() {
  return (
    <div id="intro" className={styles.section}>
      <h2>Introduction</h2>
      <p>
        Hello! My name is Ibrahim Rather and this is a website I built to
        showcase what I worked on and what I achieved while working as a UX &
        Front-end developer for a company known as Linked Infrastructure for
        Networked Cultural Scholarship, also known as LINCS. Between May 2022
        and December 2022, I had the opportunity to create and design my first
        large-scale website, which can be found at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://portal.lincsproject.ca/"
        >
          https://portal.lincsproject.ca/
        </a>
        . Below I will discuss more in detail the goals I achieved while working
        at LINCS along with a more detailed explanation of what I learned.
      </p>
    </div>
  );
}

export default Intro;
