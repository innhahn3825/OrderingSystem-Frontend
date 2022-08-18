import React from 'react'
import styles from './LoginPage.module.scss';
import { LoginForm } from "../ComponentIndex";
import { useRouter } from "next/router";

const LoginPage = () => {
  return (
    <div className={styles['LoginPage']}>
      <LoginForm />
    </div>
  )
}

export default LoginPage

