// pages/basic.js
import { useState } from 'react';
import styles from '../styles/Basic.module.css';

export default function Basic() {
  const [sections, setSections] = useState([]);
  const [sectionForm, setSectionForm] = useState({ sectionName: '' });
  const [scores, setScores] = useState([]);
  const [scoreForm, setScoreForm] = useState({
    type: 'Individual',
    position1: '',
    position2: '',
    position3: '',
    gradeA: '',
    gradeB: '',
    gradeC: ''
  });

  const handleSectionChange = (e) => {
    const { name, value } = e.target;
    setSectionForm({ ...sectionForm, [name]: value });
  };

  const handleScoreChange = (e) => {
    const { name, value } = e.target;
    setScoreForm({ ...scoreForm, [name]: value });
  };

  const handleSectionSubmit = (e) => {
    e.preventDefault();
    setSections([...sections, sectionForm]);
    setSectionForm({ sectionName: '' });
  };

  const handleScoreSubmit = (e) => {
    e.preventDefault();
    setScores([...scores, scoreForm]);
    setScoreForm({
      type: 'Individual',
      position1: '',
      position2: '',
      position3: '',
      gradeA: '',
      gradeB: '',
      gradeC: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic</h1>

      <div classN
