// NavBar.js

import React from "react";
import styles from "./NavBar.module.css";

const NavBar = ({ onSignIn, user, activeTab, setActiveTab }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Timer App</div>
      <div>
        <button
          className={
            activeTab === "25thMinTimer"
              ? `${styles.navItem} ${styles.selected}`
              : styles.navItem
          }
          onClick={() => setActiveTab("25thMinTimer")}
        >
          25th Min Timer
        </button>
        <button
          className={
            activeTab === "timer"
              ? `${styles.navItem} ${styles.selected}`
              : styles.navItem
          }
          onClick={() => setActiveTab("timer")}
        >
          Timer
        </button>
      </div>
      <button className={styles.signInButton} onClick={onSignIn}>
        Sign in with Google
      </button>
    </nav>
  );
};

export default NavBar;
