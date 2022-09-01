import React from "react";
import styles from "./LoginForm.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginForm = ({ account, usernameOnChange, passwordOnChange, loginOnClick }) => {
  // const router = useRouter();
  // const loginOnClick = () => {
  //   // router.push("/dashboard.jsx");
  // }
  return (
    <div className={styles["Container"]}>
      <div className={styles["Form"]}>
        <div className={styles["Inside-Login-Form"]}>
          <div className={styles["Image-Section"]}>
            <Image
              src="/images/logo.png"
              alt="Escobar Logo"
              width="100"
              height="100"
              objectFit="cover"
            />
            <label className={styles["Header"]}>Login</label>
          </div>

          <div className={styles["Input-Spacing"]}>
            <div className={styles["Username-Section"]}>
              <label className={styles["Text"]}>Username:</label>
            </div>
            <input
              type="text"
              id="first"
              value={account.accountUsername}
              onChange={usernameOnChange}
              name="first"
              className={styles["Input-Forms"]}
              placeholder="Enter your username."
            />
          </div>

          <div className={styles["Input-Spacing"]}>
            <div className={styles["Password-Section"]}>
              <label className={styles["Text"]}>Password:</label>
            </div>
            <input
              type="password"
              id="last"
              value={account.accountPassword}
              onChange={passwordOnChange}
              name="last"
              className={styles["Input-Forms"]}
              placeholder="Enter your password."
            />
          </div>

            <button className={styles["Button"]} onClick={loginOnClick}>
              Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
