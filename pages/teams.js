import Layout from '../components/Layout';

export default function Teams() {
  return (
    <Layout>
      <h1>Teams</h1>
      <form>
        <label>
          Team Name:
          <input type="text" name="teamName" />
        </label>
        <label>
          Code:
          <input type="text" name="code" />
        </label>
        <button type="submit">Add Team</button>
      </form>
    </Layout>
  );
}
