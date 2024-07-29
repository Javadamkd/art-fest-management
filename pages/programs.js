// pages/programs.js
import Layout from '../components/Layout';

export default function Programs() {
  return (
    <Layout>
      <h1>Programs</h1>
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
          Section:
          <input type="text" name="section" />
        </label>
        <label>
          Score Type (Position, Grade):
          <input type="text" name="scoreType" />
        </label>
        <label>
          Status (Published, To be Published, Not entered, Entered...):
          <input type="text" name="status" />
        </label>
        <label>
          Published Time:
          <input type="datetime-local" name="publishedTime" />
        </label>
        <button type="submit">Add Program</button>
      </form>
    </Layout>
  );
}
