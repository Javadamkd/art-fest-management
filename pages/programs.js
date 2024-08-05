// pages/programs.js
import styles from './Programs.module.css';

const Programs = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.programForm}>
        <label>Program Name:</label>
        <input type="text" />
        <label>Date:</label>
        <input type="text" />
        <label>Time:</label>
        <input type="text" />
        <label>Venue:</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Programs;
