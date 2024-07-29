// pages/candidates.js
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Candidates() {
  return (
    <div className="container">
      <Head>
        <title>Candidates</title>
      </Head>
      <Sidebar />
      <div className="content">
        <div className="card">
          <h1>Candidates</h1>
          <p>Content for the Candidates page.</p>
        </div>
      </div>
    </div>
  );
}
