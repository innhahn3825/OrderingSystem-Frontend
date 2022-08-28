import React, { useState, useEffect } from 'react';
import styles from './LoginPage.module.scss';
import { LoginForm } from "../ComponentIndex";
import { useRouter } from "next/router";
import Rest from '../../rest/Rest.tsx';
import AccountLogin from '../../models/AccountLogin.tsx';
import Toast from "../Toast/Toast";

const INITIAL_URL = "http://localhost:8080/api/v1";

const LoginPage = () => {

  const [account, setAccount] = useState(new AccountLogin("", "", ""));

  // const router = useRouter();
  const rest = new Rest();

  const handleUsernameOnChange = (event) => {
    setAccount(new AccountLogin(event.target.value, account.accountPassword, account.employeeName));
  };

  const handlePasswordOnChange = (event) => {
    setAccount(new AccountLogin(account.accountUsername, event.target.value, account.employeeName));
  };

  const successfullLoginActions = (employeeName) => {
    localStorage.setItem("username", employeeName);
    console.log(employeeName);
    // router.replace("/dashboard");
  };

  const handleLoginOnClick = () => {
    // rest.login(
    //   `${INITIAL_URL}/login`,
    //   account.toJson(),
    //   successfullLoginActions,
    //   `Successfully Logged In`
    // );
  };

  return (
    <div className={styles["LoginPage"]}>
      <Toast />
      <LoginForm
        account={account}
        usernameOnChange={handleUsernameOnChange}
        passwordOnChange={handlePasswordOnChange}
        loginOnClick={handleLoginOnClick}
      />
    </div>
  );
}

export default LoginPage

