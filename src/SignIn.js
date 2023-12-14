import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Sign-in successful.
        // You can also get the Google Access Token if you need to access Google APIs.
        console.log(result.user); // This is the signed-in user.
      })
      .catch((error) => {
        // Handle sign-in errors here.
        console.error(error);
      });
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export default SignIn;
