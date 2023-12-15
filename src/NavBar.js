// NavBar.js
import React from "react";
import styles from "./NavBar.module.css"; // Import the styles using the correct path

const NavBar = ({ onSignIn, user, activeTab, setActiveTab }) => {
  return (
    <nav className={styles.navbar}>
      {" "}
      {/* Use styles.navbar instead of "navbar" */}
      <div className={styles.logo}>Timer App</div>
      <div className={styles.navTabs}>
        <button
          className={`${activeTab === "25thMinTimer" ? styles.selected : ""}`}
          onClick={() => setActiveTab("25thMinTimer")}
        >
          25th Min Timer
        </button>
        <button
          className={`${activeTab === "timer" ? styles.selected : ""}`}
          onClick={() => setActiveTab("timer")}
        >
          Timer
        </button>
      </div>
      {user ? (
        <div className={styles.userGreeting}>
          Hello, {user.displayName || "User"}
        </div>
      ) : (
        <button className={styles.signInBtn} onClick={onSignIn}>
          Sign in with Google
        </button>
      )}
    </nav>
  );
};

export default NavBar;
