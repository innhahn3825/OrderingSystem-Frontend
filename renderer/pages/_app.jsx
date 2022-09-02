import React from "react";
import Head from "next/head";
import TitleBar from "../src/components/Titlebar/TitleBar.jsx";
import styles from './_app.module.scss';
import '../src/styles/globals.css';


export default function (props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <div className={styles.container}>

          <div className={styles.title_bar}>
            <TitleBar/>
          </div>

          <div className={styles.content}>
            <Component {...pageProps} />
          </div>

       </div>  
    </React.Fragment>
  );
}