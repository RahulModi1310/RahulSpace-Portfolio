import React from "react";

import styles from "./IntroSection.module.css";
import intro_illustration from "../../assets/Intro_Section_Illustration.png";
import codeforcesLogo from "../../assets/CodeforcesLogo.png";
import leetCodeLogo from "../../assets/LeetCodeLogo.png";
import instagramLogo from "../../assets/InstagramLogo.png";
import EmailLogo from "../../assets/EmailLogo.png";
import SocialMediaCards from "./SocialMediaCards";

const IntroSection = () => {
  return (
    <>
      <div className={styles.intro_section}>
        {/* Left Intro Block */}
        <div className={styles.left_intro_block}>
          <h1 className={styles.intro_heading}>
            Hello There, I'm <span>Rahul Modi 👋</span>
          </h1>
          <p className={styles.intro_content}>{intro_content}</p>
          <div className={styles.intro_social_media}>
            <SocialMediaCards
              title="Online Coding Platforms"
              data={codingPlatform}
            />
            <SocialMediaCards title="Social Media" data={socialMedia} />
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
    An aspiring <span>software developer</span>, who is committed to building a
    career in the tech industry. My passion for coding and problem-solving
    drives me to continuously learn and grow as a developer. I am proficient in
    various programming languages, including
    <span> C++, Python, and JavaScript</span>, and have experience working with
    databases, APIs, and web development frameworks. I am a dedicated team
    player, always seeking to collaborate and contribute to a positive and
    productive work environment.
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
