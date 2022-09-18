import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {LoginPage} from '../src/components/ComponentIndex'
import TitleBar from "../src/components/Titlebar/TitleBar.jsx";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title> Escobar Ordering System </title>
      </Head>
      <div>
        <TitleBar Page = "login"/>
        <LoginPage/>
      </div>
    </React.Fragment>
  );
};

export default Home;
