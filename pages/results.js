import { connectToDatabase } from '../lib/db';

export default function Results({ results }) {
  return (
    <Layout>
      <h1>Results</h1>
      <ul>
        {results.map(result => (
          <li key={result._id}>
            {result.program}: {result.position}, {result.grade}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const results = await db.collection('results').find({}).toArray();
  return {
    props: {
      results: JSON.parse(JSON.stringify(results)),
    },
  };
}

