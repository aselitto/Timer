// NavBar.js
const NavBar = ({ onSignIn, user, activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <div className="logo">Timer App</div>
      <div className="nav-tabs">
        <button
          className={`tab ${activeTab === "25thMinTimer" ? "selected" : ""}`}
          onClick={() => setActiveTab("25thMinTimer")}
        >
          25th Min Timer
        </button>
        <button
          className={`tab ${activeTab === "timer" ? "selected" : ""}`}
          onClick={() => setActiveTab("timer")}
        >
          Timer
        </button>
      </div>
      {user ? (
        <div className="user-greeting">Hello, {user.displayName || "User"}</div>
      ) : (
        <button className="sign-in-btn" onClick={onSignIn}>
          Sign in with Google
        </button>
      )}
    </nav>
  );
};

export default NavBar;
