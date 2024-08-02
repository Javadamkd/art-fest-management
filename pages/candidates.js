// pages/candidates.js
import React from 'react';
import styles from './candidates.module.css';

const Candidates = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" required />

        <label htmlFor="class">Class:</label>
        <input type="text" id="class" name="class" required />

        <label htmlFor="party">Party:</label>
        <input type="text" id="party" name="party" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Candidates;
