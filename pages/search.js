import Layout from '../components/Layout';

export default function Search() {
  return (
    <Layout>
      <h1>Search</h1>
      <form>
        <label>
          Search Query:
          <input type="text" name="query" />
        </label>
        <button type="submit">Search</button>
      </form>
      {/* Add more form fields and functionalities as needed */}
    </Layout>
  );
}
