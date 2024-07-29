import Layout from '../components/Layout';

export default function Basic() {
  return (
    <Layout>
      <h1>Basic</h1>
      <form>
        <label>
          Fest Details:
          <input type="text" name="festDetails" />
        </label>
        <label>
          Section List:
          <input type="text" name="sectionList" />
          <button type="button">Add Section</button>
        </label>
        <label>
          Position Score Scale (1st, 2nd, 3rd):
          <input type="text" name="positionScoreScale" />
        </label>
        <label>
          Grade Score Scale (A, B, C):
          <input type="text" name="gradeScoreScale" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
