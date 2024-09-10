import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        // When the user SignIn, this would get executed.
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // If signed in, then let them go through browse
        // Met with an issue
        // 1st solution use window.location.href
        // 2nd is we have to move router
        // 3rd move navigate to somewhere else
        navigate("/browse");
      } else {
        // When the user logs out, we shall remove this from context
        dispatch(removeUser());
        navigate("/");
        // If logs out then go to the main page
      }
    });

    return () => {
      // Unsubscribing to the onAuthStateChanged
      // Unsubscribe when the component will Unmount
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        {
        }
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        alt="Logo alternative to Netflix"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex">
          <img
            alt="userLogoAlternative"
            className="w-10 h-10 m-2 p-1"
            src={user.photoURL}
          />
          <div className="font-bold text-white p-2">{user.displayName}</div>
          <button onClick={handleSignOut} className="font-bold text-white p-1">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
