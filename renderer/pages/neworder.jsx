import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Dashboard, Sidebar, LoginPage} from '../src/components/ComponentIndex'

function neworder() {
  return (
    <React.Fragment>
      <Head>
        <title> New Order </title>
      </Head>
      <div>
        <Sidebar/>
      </div>
    </React.Fragment>
  );
};

export default neworder;
