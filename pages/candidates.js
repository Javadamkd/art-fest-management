// pages/candidates.js
import React from 'react';
import styles from './candidates.module.css';

const Candidates = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" id="name" name="name" required className={styles.input} />

        <label htmlFor="position" className={styles.label}>Position:</label>
        <input type="text" id="position" name="position" required className={styles.input} />

        <label htmlFor="class" className={styles.label}>Class:</label>
        <input type="text" id="class" name="class" required className={styles.input} />

        <label htmlFor="party" className={styles.label}>Party:</label>
        <input type="text" id="party" name="party" required className={styles.input} />

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Candidates;
