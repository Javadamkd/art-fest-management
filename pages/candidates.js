// pages/candidates.js
import styles from './Candidates.module.css';

const Candidates = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.candidateForm}>
        <label>Chest No:</label>
        <input type="text" name="chestNo" placeholder="Enter Chest No" />
        
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter Name" />
        
        <label>Team Code:</label>
        <input type="text" name="teamCode" placeholder="Enter Team Code" />
        
        <label>Section:</label>
        <input type="text" name="section" placeholder="Enter Section" />
        
        <label>Class:</label>
        <input type="text" name="class" placeholder="Enter Class" />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Candidates;
