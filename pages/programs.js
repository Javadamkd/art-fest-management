// pages/programs.js
import { useState } from 'react';
import styles from './Programs.module.css';

const Programs = () => {
  const [section, setSection] = useState('');
  const [scoreType, setScoreType] = useState('');
  const [gradeType, setGradeType] = useState('');

  return (
    <div className={styles.formContainer}>
      <form className={styles.programForm}>
        <label>Code:</label>
        <input type="text" name="code" placeholder="Enter Code" />
        
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter Name" />
        
        <label>Section:</label>
        <select name="section" value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="" disabled>Select Section</option>
          <option value="Aliya">Aliya</option>
          <option value="Thaniya">Thaniya</option>
          <option value="Thanawiyya">Thanawiyya</option>
          <option value="Bidaya">Bidaya</option>
          <option value="Uoola">Uoola</option>
        </select>
        
        <label>Score Type:</label>
        <select name="scoreType" value={scoreType} onChange={(e) => setScoreType(e.target.value)}>
          <option value="" disabled>Select Score Type</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
          <option value="Shared by two">Shared by two</option>
          <option value="Master">Master</option>
        </select>
        
        <label>Grade Type:</label>
        <select name="gradeType" value={gradeType} onChange={(e) => setGradeType(e.target.value)}>
          <option value="" disabled>Select Grade Type</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
          <option value="Shared by two">Shared by two</option>
          <option value="Master">Master</option>
        </select>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Programs;
