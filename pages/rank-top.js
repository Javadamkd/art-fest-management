// pages/rank-top.js
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function RankTop() {
  return (
    <div className="container">
      <Head>
        <title>Rank & Top</title>
      </Head>
      <Sidebar />
      <div className="content">
        <div className="card">
          <h1>Rank & Top</h1>
          <p>Content for the Rank & Top page.</p>
        </div>
      </div>
    </div>
  );
}
