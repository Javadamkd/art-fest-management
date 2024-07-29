// pages/teams.js
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Teams() {
  return (
    <div className="container">
      <Head>
        <title>Teams</title>
      </Head>
      <Sidebar />
      <div className="content">
        <div className="card">
          <h1>Teams</h1>
          <p>Content for the Teams page.</p>
        </div>
      </div>
    </div>
  );
}
