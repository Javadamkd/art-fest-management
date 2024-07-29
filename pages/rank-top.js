import Layout from '../components/Layout';

export default function RankTop() {
  return (
    <Layout>
      <h1>Rank & Top</h1>
      <form>
        <label>
          Team Ranking All Section:
          <input type="text" name="teamRankingAllSection" />
        </label>
        <label>
          Toppers All Section:
          <input type="text" name="toppersAllSection" />
        </label>
        <label>
          Team Ranking Section Wise:
          <input type="text" name="teamRankingSectionWise" />
        </label>
        <label>
          Toppers Section Wise:
          <input type="text" name="toppersSectionWise" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
