import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  // Using the useRef to hold this values and not needed for re-rendering
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Valdiate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Write the logic for Sign Up or Sign In

    if (!isSignInForm) {
      // Write the signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "  " + errorMessage);
        });
    } else {
      // Write the sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "  " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo alter"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-4/12  p-12 bg-black mx-auto my-36 left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-800 font-bold text-lg"> {errorMessage}</p>
        <button
          className="bg-red-600 p-4 my-6 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix ? Sign up Now !"
            : "Already a member ? Sign in Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
