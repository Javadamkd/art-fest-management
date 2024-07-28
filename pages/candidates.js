// pages/candidates.js
import { useState } from 'react';
import styles from '../styles/Candidates.module.css';

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState({
    chestNo: '',
    name: '',
    teamCode: '',
    section: '',
    className: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCandidates([...candidates, form]);
    setForm({
      chestNo: '',
      name: '',
      teamCode: '',
      section: '',
      className: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Candidates</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="chestNo"
          value={form.chestNo}
          onChange={handleChange}
          placeholder="Chest No"
          className={styles.input}
        />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className={styles.input}
        />
        <input
          type="text"
          name="teamCode"
          value={form.teamCode}
          onChange={handleChange}
          placeholder="Team Code"
          className={styles.input}
        />
        <input
          type="text"
          name="section"
          value={form.section}
          onChange={handleChange}
          placeholder="Section"
          className={styles.input}
        />
        <input
          type="text"
          name="className"
          value={form.className}
          onChange={handleChange}
          placeholder="Class"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Candidate</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Chest No</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Team Code</th>
            <th className={styles.tableHeader}>Section</th>
            <th className={styles.tableHeader}>Class</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td className={styles.tableCell}>{candidate.chestNo}</td>
              <td className={styles.tableCell}>{candidate.name}</td>
              <td className={styles.tableCell}>{candidate.teamCode}</td>
              <td className={styles.tableCell}>{candidate.section}</td>
              <td className={styles.tableCell}>{candidate.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
