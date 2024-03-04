import React from "react";

import styles from "./CPStatusCard.module.css";
import SectionComp from "../../HelperComponents/SectionComp/SectionComp";

const CPStatusCard = () => {
  return (
    <SectionComp
      id="Blogs"
      title={
        <span className={styles.cp_heading}>Competitive Programming {` `}</span>
      }
    >
      <div className={styles.cp_status_card}>
        <iframe
          src="https://codeforces-readme-stats.vercel.app/api/card?username=Rahul1310&theme=default&disable_animations=false&show_icons=false&force_username=true"
          title="Leetcode Profile - Rahul1310"
        ></iframe>
        <iframe
          src="https://leetcard.jacoblin.cool/Rahul1310?ext=contest&theme=light"
          title="Leetcode Profile - Rahul1310"
        ></iframe>
      </div>
    </SectionComp>
  );
};

export default CPStatusCard;
