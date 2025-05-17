"use client";
import { useState } from 'react';
import PersonTabs from './components/PersonTabs';
import PersonDetail from './components/PersonDetail';
import PersonEntryForm from './components/PersonEntryForm';

export default function Home() {
  const [entries, setEntries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addEntry = (entry) => {
    setEntries(prev => [...prev, entry]);

    // Select the person tab if they’re new or first
    if (!selected || selected !== entry.name) {
      setSelected(entry.name);
    }

    setShowForm(false); // hide form after submission
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <PersonTabs entries={entries} selected={selected} setSelected={setSelected} />
      <div style={{ flex: 1, padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <button onClick={() => setShowForm(!showForm)}>
            ➕ Add New Entry
          </button>
        </div>

        {showForm && (
          <PersonEntryForm name="" onAdd={addEntry} />
        )}

        {selected ? (
          <>
            <PersonDetail name={selected} entries={entries} />
            <PersonEntryForm name={selected} onAdd={addEntry} />
          </>
        ) : (
          <p>No person selected yet.</p>
        )}
      </div>
    </div>
  );
}
