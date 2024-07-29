import Layout from '../components/Layout';

export default function Result() {
  return (
    <Layout>
      <h1>Result</h1>
      <form>
        <label>
          Program Code:
          <input type="text" name="programCode" />
        </label>
        <label>
          Position:
          <input type="text" name="position" />
        </label>
        <label>
          Chest No:
          <input type="text" name="chestNo" />
        </label>
        <label>
          Grade:
          <input type="text" name="grade" />
        </label>
        <button type="submit">Submit Result</button>
      </form>
      <form>
        <h2>Program Details</h2>
        <label>
          Name:
          <input type="text" name="programName" />
        </label>
        <label>
          Section:
          <input type="text" name="section" />
        </label>
        <h2>Candidate Details</h2>
        <label>
          Name:
          <input type="text" name="candidateName" />
        </label>
        <label>
          Team Code:
          <input type="text" name="teamCode" />
        </label>
        <label>
          Score:
          <input type="text" name="score" />
        </label>
        <label>
          Status:
          <input type="text" name="status" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
