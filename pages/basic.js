// pages/basic.js
import styles from '../styles/Basic.module.css';

export default function Basic() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic Settings</h1>
      <form className={styles.formContainer}>
        <div className={styles.row}>
          <label>
            Section List:
            <input type="text" name="sectionList" />
          </label>
        </div>
        <div className={styles.row}>
          <label>
            Program Type:
            <select>
              <option value="individual">Individual</option>
              <option value="shared">Shared by two</option>
              <option value="master">Master</option>
              <option value="group">Group</option>
              <option value="grade">Grade</option>
            </select>
          </label>
        </div>
        <div className={styles.row}>
          <label>
            Position Score Scale:
            <input type="text" name="positionScoreScale" />
          </label>
        </div>
        <div className={styles.row}>
          <label>
            Grade Score Scale:
            <input type="text" name="gradeScoreScale" />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
