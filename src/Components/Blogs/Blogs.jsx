import React from "react";
import SectionComp from "../SectionComp/SectionComp";

import blogs_data from "./BlogsData.js";
import styles from "./Blogs.module.css";
import TagList from "../TagList/TagList.jsx";

const Blogs = () => {
  return (
    <SectionComp
      id="Blogs"
      title={
        <>
          Recent <span className={styles.blogs_heading}> Blogs </span>
        </>
      }
    >
      <div className={styles.blog_list}>
        {blogs_data.map((blog) => {
          return (
            <div key={blog.id} className={styles.blog_card}>
              <img className={styles.blog_image} src={blog.image} />
              <p className={styles.blog_title}>{blog.title}</p>
              <p className={styles.blog_description}>{blog.description}</p>
              <TagList tags={blog.tags} />
            </div>
          );
        })}
      </div>
    </SectionComp>
  );
};

export default Blogs;
