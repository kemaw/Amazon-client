import React, { useContext, useState } from "react";
import classes from "./signUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useLocation } from "react-router-dom";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { GridLoader } from "react-spinners";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  //   const [isSignUp, setIsSignUp] = useState(false);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "signIn") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //           // console.log(userCredential.user);
          console.log(user);
          dispatch({
            type: Type.SET_USER,
            user: userCredential.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          dispatch({
            type: Type.SET_USER,
            user: userCredential.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
      //     }
    }
    // console.log(password,email);
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>

      {/* form */}

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              id="email"
              name="email"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={authHandler}
              name="signIn"
              className={classes.login__signInButton}
            >
              {loading.signIn ? (
                <GridLoader size={20} color="#36d7b7"></GridLoader>
              ) : (
                "Sign In"
              )}
              {/* SignIn */}
              {/* // type="submit" disabled={loading.signIn}> */}
            </button>
            {/* {loading.signIn && <ClipLoader size={20} color="#fff" />} */}
          </div>
          {/* <p> */}
          {/* Don't have an account? <Link to="/signup">Sign Up</Link> */}
          {/* </p> */}
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE condition of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice.
        </p>
        {/* <button onClick={auth.signInWithGoogle}>Sign In with Google</button> */}
        {/* create an account */}
        <button
          type="submit"
          onClick={authHandler}
          name="SignUp"
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <GridLoader size={20} color="#36d7b7"></GridLoader>
          ) : (
            "Create Your Amazon Account"
          )}
          {/* </button> */}
          {/* <Link to="/forgotpassword">Forgot Password?</Link> */}
          {/* <button> */}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}> {error}</small>
        )}
      </div>
    </section>
  );
}
export default Auth;
