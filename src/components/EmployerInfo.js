import React from "react";
import styles from "../styles/styles.module.css";

function EmployerInfo() {
  return (
    <div id="employerInfo" className={styles.section}>
      <h2>Employer Information</h2>
      <p>
        LINCS is a digital humanities research company located at the University
        of Guelph. They use Semantic Technologies (linked data) to take Canadian
        research and heritage data from across the web, converting and
        connecting it, and making it more accessible to everyone. Essentially,
        the goal of LINCS is giving Canadian researchers more opportunities to
        explore and investigate culture in more transformative ways.
      </p>
    </div>
  );
}

export default EmployerInfo;
