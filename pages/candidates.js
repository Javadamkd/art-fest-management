// pages/candidates.js
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Candidates() {
  return (
    <Layout>
      <div className="card">
        <h1>Candidates</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Chest No</th>
              <th>Name</th>
              <th>Team Code</th>
              <th>Section</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {/* Candidate rows will go here */}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
