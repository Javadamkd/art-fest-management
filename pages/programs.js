// pages/programs.js
import React from 'react';
import styles from './programs.module.css';

const Programs = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <label htmlFor="programName">Program Name:</label>
        <input type="text" id="programName" name="programName" required />

        <label htmlFor="date">Date:</label>
        <input type="text" id="date" name="date" required />

        <label htmlFor="time">Time:</label>
        <input type="text" id="time" name="time" required />

        <label htmlFor="venue">Venue:</label>
        <input type="text" id="venue" name="venue" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Programs;
