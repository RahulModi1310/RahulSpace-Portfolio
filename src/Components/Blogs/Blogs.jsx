import React from "react";
import SectionComp from "../../HelperComponents/SectionComp/SectionComp";

import blogs_data from "./BlogsData.js";
import styles from "./Blogs.module.css";
import TagList from "../../HelperComponents/TagList/TagList.jsx";

const Blogs = ({readMore}) => {
  return (
    <SectionComp
      id="Blogs"
      title={
        <>
          Recent <span className={styles.blogs_heading}> Blogs </span>
        </>
      }
      readMore={readMore}
      url = {readMore ? readMore.url : ""}
      blockName = {readMore ? readMore.blockName : ""}
    >
      <div className={styles.blog_list}>
        {blogs_data.map((blog) => {
          return (
            <div key={blog.id} className={styles.blog_card}>
              <img className={styles.blog_image} src={blog.image} />
              <p className={styles.blog_title}>{blog.title}</p>
              <p className={styles.blog_description}>{blog.description}</p>
              <TagList tags={blog.tags} />
              {blog.link && (
                <a
                  className={styles.blog_link}
                  href={blog.link}
                  target="_blank"
                >
                  <button>Read More</button>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </SectionComp>
  );
};

export default Blogs;
