import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title> Escobar Ordering System </title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/home">
            <a> Hiiii</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
