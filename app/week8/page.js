import React from 'react';
import { useUserAuth } from "../_utils/auth-context"; // Adjust the path as necessary
import Link from 'next/link';

const HomePage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut}>Logout</button>
          <Link href="/week8/shopping-list">
            <a>Go to Shopping List</a>
          </Link>
        </>
      ) : (
        <button onClick={handleSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

export default HomePage;
