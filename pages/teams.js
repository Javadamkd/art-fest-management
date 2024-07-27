import { connectToDatabase } from '../lib/db';

export default function Teams({ teams }) {
  return (
    <Layout>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team._id}>
            {team.name} - {team.totalScore} points
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const teams = await db.collection('teams').find({}).toArray();
  return {
    props: {
      teams: JSON.parse(JSON.stringify(teams)),
    },
  };
}

