// pages/index.js
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Art Fest Management</title>
      </Head>
      <Sidebar />
      <div className="content">
        <div className="card">
          <h1>Art Fest Management</h1>
          <p>Welcome to the Art Fest Management System.</p>
          <a href="/downloads" className="download-button">Download Now</a>
        </div>
      </div>
    </div>
  );
}
