import { connectToDatabase } from '../lib/db';

export default function Programs({ programs }) {
  return (
    <Layout>
      <h1>Programs</h1>
      <ul>
        {programs.map(program => (
          <li key={program._id}>
            {program.name} - {program.section}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const programs = await db.collection('programs').find({}).toArray();
  return {
    props: {
      programs: JSON.parse(JSON.stringify(programs)),
    },
  };
}

