import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.icon}
          src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:anweshalaha2002@gmail.com">anweshalaha2002@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.icon} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Anwesha2602">github.com/Anwesha2602</a>
        </li>
      </ul>
    </footer>
  );
};