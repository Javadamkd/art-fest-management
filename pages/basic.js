import Layout from '../components/Layout';

export default function Basic() {
  return (
    <Layout>
      <h1>Basic</h1>
      <form>
        <label>
          Basic Info:
          <input type="text" name="basicInfo" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* Add more form fields and functionalities as needed */}
    </Layout>
  );
}
