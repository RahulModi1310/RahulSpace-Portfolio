import React from "react";
import SectionComp from "../../HelperComponents/SectionComp/SectionComp";
import TagList from "../../HelperComponents/TagList/TagList";

import project_data from "./ProjectsData";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <SectionComp
      id="Projects"
      title={
        <>
          Recent <span className={styles.project_title_span}> Projects </span>
        </>
      }
    >
      <ul className={styles.projects_lists}>
        {project_data.map((proj) => {
          return (
            <li key={proj.id}>
              <img className={styles.project_image} src={proj.image} />
              <div className={styles.project_content}>
                <p className={styles.project_title}>{proj.title}</p>
                <p className={styles.project_description}>{proj.description}</p>
                <TagList tags={proj.tags} />
              </div>
            </li>
          );
        })}
      </ul>
    </SectionComp>
  );
};

export default Projects;
