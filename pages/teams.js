// pages/teams.js
import { useState } from 'react';
import styles from '../styles/Teams.module.css';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState({
    code: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeams([...teams, form]);
    setForm({
      code: '',
      name: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Teams</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="code"
          value={form.code}
          onChange={handleChange}
          placeholder="Code"
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
        <button type="submit" className={styles.button}>Add Team</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Code</th>
            <th className={styles.tableHeader}>Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td className={styles.tableCell}>{team.code}</td>
              <td className={styles.tableCell}>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
