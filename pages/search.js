// pages/search.js
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Search() {
  return (
    <div className="container">
      <Head>
        <title>Search</title>
      </Head>
      <Sidebar />
      <div className="content">
        <div className="card">
          <h1>Search</h1>
          <p>Content for the Search page.</p>
        </div>
      </div>
    </div>
  );
}
