// pages/basic.js
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Basic() {
  return (
    <Layout>
      <div className="card">
        <h1>Basic</h1>
        <form>
          <div className="form-group">
            <label htmlFor="programType">Program Type:</label>
            <select id="programType" name="programType">
              <option value="individual">Individual</option>
              <option value="sharedByTwo">Shared by Two</option>
              <option value="master">Master</option>
              <option value="group">Group</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="positionScore">Position Score Scale:</label>
            <input type="number" id="positionScore" name="positionScore" />
          </div>
          <div className="form-group">
            <label htmlFor="gradeScore">Grade Score Scale:</label>
            <input type="number" id="gradeScore" name="gradeScore" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
