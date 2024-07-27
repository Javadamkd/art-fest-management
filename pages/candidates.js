import { connectToDatabase } from '../lib/db';

export default function Candidates({ candidates }) {
  return (
    <Layout>
      <h1>Candidates</h1>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate._id}>
            {candidate.name} - {candidate.totalScore} points
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const candidates = await db.collection('candidates').find({}).toArray();
  return {
    props: {
      candidates: JSON.parse(JSON.stringify(candidates)),
    },
  };
}

