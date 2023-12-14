import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar"; // Ensure this component is created as suggested earlier
import Timer from "./Timer"; // Your existing Timer component
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("25thMinTimer"); // State to track the active tab

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user); // Sets the user state to the signed-in user
      })
      .catch((error) => {
        console.error(error); // Handle sign-in errors here
      });
  };

  return (
    <div className="App">
      <NavBar
        onSignIn={signInWithGoogle}
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="App-content">
        {user ? (
          // Render the Timer component if the user is signed in and the '25thMinTimer' tab is active
          activeTab === "25thMinTimer" && <Timer />
        ) : (
          // Render the sign-in button if the user is not signed in
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
        {/* You can add more conditional rendering here for other components based on the activeTab */}
      </main>
    </div>
  );
}

export default App;
