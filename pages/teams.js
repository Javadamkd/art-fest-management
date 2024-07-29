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
        <button type="submit">Add Team</button>
      </form>
      {/* Add more form fields and functionalities as needed */}
    </Layout>
  );
}
