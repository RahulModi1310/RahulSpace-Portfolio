import React from "react";

import styles from "./IntroSection.module.css";
import intro_illustration from "../../assets/Intro_illustrationv2.png";
import codeforcesLogo from "../../assets/CodeforcesLogo.png";
import leetCodeLogo from "../../assets/LeetCodeLogo.png";
import instagramLogo from "../../assets/InstagramLogo.png";
import EmailLogo from "../../assets/EmailLogo.png";

const IntroSection = () => {
  return (
    <>
      <div id="About" className={styles.intro_section}>
        {/* Left Intro Block */}
        <div className={styles.left_intro_block}>
          <h1 className={styles.intro_heading}>
            Hello There, I'm <span>Rahul Modi 👋</span>
          </h1>
          <p className={styles.intro_content}>{intro_content}</p>
          <div className={styles.intro_links}>
            <a href="https://www.linkedin.com/in/rahulketanmodi/" target="_blank" className={styles.lets_connect_url}>Let's connect and collaborate!</a>
            <a href="https://drive.google.com/drive/folders/1HsHqUtDeUYPvoh-mxkJ3WqMNJPm6aM3i?usp=drive_link" target="_blank" className={styles.lets_connect_url}>Resume</a>
          </div>
        </div>

        {/* right Intro Block */}
        <div className={styles.right_intro_block}>
          <img src={intro_illustration} alt="" />
        </div>
      </div>
    </>
  );
};

export default IntroSection;

var intro_content = (
  <>
    A <span>software engineer</span> who loves building cool tech — be it
    multithreaded systems or APIs that just work. With a BTech from IIT Roorkee
    and experience at <span>Flipkart and Microsoft IDC</span>, I’ve sharpened my coding 
    skills and knack for problem-solving. I love solving complex technical problems 
    and learning new technologies to push boundaries. When I'm not coding, you’ll 
    find me doodling 🎨, catching up on movies 🎬, or diving into a great book 📚.
  </>
);

var codingPlatform = [
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/Rahul1310",
    image: codeforcesLogo,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/Rahul1310/",
    image: leetCodeLogo,
  },
];
var socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/rahul_modi13/",
    image: instagramLogo,
  },
  {
    name: "Email",
    link: "mailto:rahulkd2508@gmail.com",
    image: EmailLogo,
  },
];
