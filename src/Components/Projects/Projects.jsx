import React from "react";
import SectionComp from "../../HelperComponents/SectionComp/SectionComp";
import TagList from "../../HelperComponents/TagList/TagList";
import project_data from "./ProjectsData";
import styles from "./Projects.module.css";
import Modal from "../../HelperComponents/Moodle/Modal";
import GalleryView from "../../HelperComponents/GalleryView/GalleryView";
import ImageOverlay from "../../HelperComponents/ImageOverlay/ImageOverlay";

const ProjectItem = ({ proj }) => (
  <li key={proj.id}>
    <Modal
      modalComponent={
        <div className={styles.modal_component}>
          <h1>{proj.title}</h1>
          <TagList tags={proj.tags} />
          <GalleryView imageList={proj.imageList} />
          <p className={styles.project_description}>{proj.description}</p>
          {proj.link && (
            <a href={proj.link} target="_blank">
              <button>More Details</button>
            </a>
          )}
        </div>
      }
    >
      <ImageOverlay moreNumber={proj.imageList.length}>
        <img
          className={styles.project_image}
          src={proj.image}
          alt={proj.title}
        />
      </ImageOverlay>
    </Modal>
    <div className={styles.project_content}>
      <p className={styles.project_title}>{proj.title}</p>
      <p className={styles.project_description}>{proj.description}</p>
      <TagList tags={proj.tags} />
    </div>
  </li>
);

const Projects = ({ listLength, readMore }) => (
  <SectionComp
    id="Projects"
    title={
      <>
        Recent <span className={styles.project_title_span}> Projects </span>
      </>
    }
    readMore={readMore}
    url = {readMore ? readMore.url : ""}
    blockName = {readMore ? readMore.blockName : ""}
  >
    <ul className={styles.projects_lists}>
      {console.log(listLength)}
      {project_data.slice(0, listLength).map((proj) => (
        <ProjectItem key={proj.id} proj={proj} />
      ))}
    </ul>
  </SectionComp>
);

export default Projects;
