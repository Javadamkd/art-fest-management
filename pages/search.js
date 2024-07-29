import Layout from '../components/Layout';

export default function Search() {
  return (
    <Layout>
      <h1>Search</h1>
      <form>
        <label>
          Candidate Search:
          <input type="text" name="candidateSearch" />
        </label>
        <label>
          Program Search:
          <input type="text" name="programSearch" />
        </label>
        <label>
          Team Search:
          <input type="text" name="teamSearch" />
        </label>
        <button type="submit">Search</button>
      </form>
    </Layout>
  );
}
