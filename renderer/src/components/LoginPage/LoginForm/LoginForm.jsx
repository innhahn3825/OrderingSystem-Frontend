import React from 'react'
import styles from './LoginForm.module.scss';
import Image from "next/image";
import { useRouter } from "next/router";
import Link from 'next/link';


const LoginForm = () => {
  // const router = useRouter();
  // const loginOnClick = () => {
  //   // router.push("/dashboard.jsx");
  // }
    return (
      <div className={styles['Container']}>
          <form action="/send-data-here" method="post" className = {styles['Form']}>
            <div className={styles['Inside-Login-Form']}>
              <div className={styles['Image-Section']}>
                  <Image
                      src="/images/logo.png" 
                      alt="Escobar Logo"
                      width = '100'
                      height = '100'
                      objectFit="cover"
                  /> 
                  <label className = {styles['Header']}>Login</label>
              </div>

              <div className={styles['Input-Spacing']}>
                <div className={styles['Username-Section']}>
                  <label className = {styles['Text']}>Username:</label>
                </div>
                <input type="text" id="first" name="first" className = {styles['Input-Forms']} placeholder="Enter your username."/>
              </div>

              <div className={styles['Input-Spacing']}>
                <div className={styles['Password-Section']}>
                  <label className = {styles['Text']}>Password:</label>
                </div>
                <input type="text" id="last" name="last" className = {styles['Input-Forms']} placeholder="Enter your password."/>
              </div>

              <Link href = "/dashboard"><button type="submit" className = {styles['Button']}>Login</button></Link>
              </div>
          </form>
        </div>
  )
}


export default LoginForm

