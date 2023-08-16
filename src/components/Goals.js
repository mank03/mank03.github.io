import React from "react";
import styles from "../styles/styles.module.css";

function Goals() {
  return (
    <div id="goals" className={styles.section}>
      <h2>Goals</h2>
      <p>
        I had 3 learning goals during this co-op. The first main goal was to try
        to understand the overall scope of a problem by learning to take
        different approaches to solving the problem before tackling it, such as
        brainstorming potential solutions and not just guessing and checking.
        The second main goal was to learn how to break down a big problem into
        subtasks before tackling it. The third main goal was to learn new React
        skills during the job. Below, you will find more detail about each goal,
        how I accomplished it, and how I improved afterwards.
      </p>

      <details>
        <summary>Goal 1</summary>
        <p>
          As I continued to work at LINCS, I found increasing difficulty in
          being able to problem solve. I was always struggling with coming up
          with solutions for large problems and always had to rely on others in
          order to be able to find the correct approach. This is when I started
          to learn the correct way to tackle a problem. Rather than taking the
          head on approach, I learned to see what the overall scope of the
          problem was and then seeing what were the different ways to approach
          that problem before attempting to solve it. By the time the end of the
          work term arrived, my problem solving skills increased tremendously
          and I was able to solve majority of the tasks given to me on my own.
        </p>
      </details>

      <details>
        <summary>Goal 2</summary>
        <p>
          Before joining LINCS, if I ever encountered a big coding problem I
          would always just look at the problem as a whole rather then breaking
          it down into easier tasks. My goal during this work term was to be
          able to start implementing that strategy by going through a Gitlab
          issue given to me and creating a check list of what all specifically
          needs to be done for that task. For example when building the home
          page, I created a check list for all the necessary components needed,
          and then I divided those tasks down further into what was specifically
          needed for each component. Now I am more used to breaking down any big
          problem before implementing it's solution.
        </p>
      </details>

      <details>
        <summary>Goal 3</summary>
        <p>
          Coming into LINCS I wanted to be able to improve on my React skills in
          the work place in order to be ready for any future job opportunities.
          I wanted to specifically improve on my React Hooks skills as before I
          didn't have any opportunity to learn them. This work term was a very
          good opportunity for me to do this, because I had to create a tile
          banner that a user would be able to both click and hover over in order
          to display that tiles information. Thanks to this task, I learned more
          about how useEffect hooks work, and using useState hooks in order to
          change the state of a component based on a click or hover.
        </p>
      </details>
    </div>
  );
}

export default Goals;
