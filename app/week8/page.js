"use client";
import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link'; // Import the Link component from Next.js

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
          {/* Use the Link component to navigate to the shopping list page */}
          {/* Replace `/week8/shopping-list` with the actual path to your shopping list page */}
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

export default Page;
