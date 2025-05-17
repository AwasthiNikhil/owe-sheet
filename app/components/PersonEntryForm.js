"use client";
import { useState } from 'react';

export default function PersonEntryForm({ name = '', onAdd }) {
    const [personName, setPersonName] = useState(name);
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('owed');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [topic, setTopic] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!amount || !date || !personName) return;
  
      onAdd({
        id: Date.now().toString(),
        name: personName,
        amount: parseFloat(amount),
        type,
        date,
        topic,
      });
  
      setAmount('');
      setTopic('');
      if (!name) setPersonName('');
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
        {!name && (
          <input
            value={personName}
            onChange={e => setPersonName(e.target.value)}
            placeholder="Person's name"
          />
        )}
        <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Amount" />
        <input value={date} onChange={e => setDate(e.target.value)} type="date" />
        <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic (optional)" />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="owed">I owe</option>
          <option value="owesMe">They owe me</option>
        </select>
        <button type="submit">Add Entry</button>
      </form>
    );
  }
  