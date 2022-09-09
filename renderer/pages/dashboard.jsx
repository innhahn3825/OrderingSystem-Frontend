import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { DashboardPage } from '../src/components/ComponentIndex';
import { useUser } from "../src/components/contexts/UserContext";

function dashboard() {
  const { employeeName } = useUser();
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
