// pages/programs.js
import React from 'react';
import styles from './programs.module.css';

const Programs = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label htmlFor="programName" className={styles.label}>Program Name:</label>
        <input type="text" id="programName" name="programName" required className={styles.input} />

        <label htmlFor="date" className={styles.label}>Date:</label>
        <input type="text" id="date" name="date" required className={styles.input} />

        <label htmlFor="time" className={styles.label}>Time:</label>
        <input type="text" id="time" name="time" required className={styles.input} />

        <label htmlFor="venue" className={styles.label}>Venue:</label>
        <input type="text" id="venue" name="venue" required className={styles.input} />

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Programs;
