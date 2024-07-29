// pages/basic.js
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Basic() {
  return (
    <div className="container">
      <Head>
        <title>Basic</title>
      </Head>
      <Sidebar />
      <div className="content">
        <div className="card">
          <h1>Basic</h1>
          <p>Content for the Basic page.</p>
        </div>
      </div>
    </div>
  );
}
