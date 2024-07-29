import Layout from '../components/Layout';

export default function Candidates() {
  return (
    <Layout>
      <h1>Candidates</h1>
      <form>
        <label>
          Code:
          <input type="text" name="code" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Team:
          <input type="text" name="team" />
        </label>
        <label>
          Section:
          <input type="text" name="section" />
        </label>
        <label>
          Class:
          <input type="text" name="class" />
        </label>
        <button type="submit">Add Candidate</button>
      </form>
    </Layout>
  );
}
