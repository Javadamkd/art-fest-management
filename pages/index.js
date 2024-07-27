import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Art Fest Management</title>
      </Head>
      <h1>Welcome to the Art Fest Management System</h1>
    </Layout>
  );
}
