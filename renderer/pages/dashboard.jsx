import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { DashboardPage } from '../src/components/ComponentIndex'

function dashboard() {
  return (
    <React.Fragment>
      <Head>
        <title> Home Page </title>
      </Head>
      <div>
        <DashboardPage/>
      </div>
    </React.Fragment>
  );
};

export default dashboard;
