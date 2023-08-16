import React from "react";
import styles from "../styles/styles.module.css";

function JobDesc() {
  return (
    <div id="jobDesc" className={styles.section}>
      <h2>Job Description</h2>
      <p>
        I had one overall project to work on during my time at LINCS, and that
        was to help design and build a website that would display what LINCS
        was, what they did, the tools they created plus the documentation for
        each tool, and also how a new user could get started with LINCS. My main
        responsibility was to build the overall website and provide feedback on
        the designs created by someone else. I will break down below what all on
        the website I worked on and contributed to. The first thing I worked on
        was creating the navigation bar for the website, I created multiple
        navbar items and each item had to have it's own sidebar with it's own
        content that I needed to create. The second and most interesting thing I
        worked on was the home page, as this was the main thing that all users
        of the website were going to see. Here, I created 6 different React
        components. The first was the hero banner, which showed the mission
        statement for LINCS, and buttons to take users to different parts of the
        site. The second was a tile banner, meant as a way for users to see a
        quick way of what LINCS does. The third component was expandable
        drawers, which showcased different ways that users could maniplulate
        their data. The fourth component was a carousel that displays the
        different datasets that LINCS uses. The fifth component was a Term of
        the Day displayer, that changed words upon refreshing the site. The
        final component I made was cards which displayed blogs made by LINCS
        employees. Some other fun things that I created on the site was a search
        bar, implementing a dropdown that translated the full site from french
        to english, implementing and modifying a glossary plugin that displays
        terms on the site and their definitions along with a full glossary,
        making the full site responsive for all screen sizes, and styling the
        full site. Overall, majority of the skills that I used for this job I
        had to learn on the job, as many of the technologies used I was not
        fully experienced in or I hadn't seen it before. These skills included
        mainly React and CSS, and one new tool I had to learn was a CMS called
        Docusaurus, which is what I used to host the site on. The full site can
        also be viewed here,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://portal.lincsproject.ca/"
        >
          https://portal.lincsproject.ca/
        </a>
        !
      </p>
    </div>
  );
}

export default JobDesc;
