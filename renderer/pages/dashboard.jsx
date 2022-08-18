import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Dashboard, Sidebar, LoginPage} from '../src/components/ComponentIndex'

function dashboard() {
  return (
    <React.Fragment>
      <Head>
        <title> Home Page </title>
      </Head>
      <div>
        <Dashboard/>
      </div>
    </React.Fragment>
  );
};

export default dashboard;
