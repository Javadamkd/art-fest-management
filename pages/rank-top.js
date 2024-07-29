import Layout from '../components/Layout';

export default function RankTop() {
  return (
    <Layout>
      <h1>Rank & Top</h1>
      <form>
        <label>
          Rank:
          <input type="text" name="rank" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* Add more form fields and functionalities as needed */}
    </Layout>
  );
}
