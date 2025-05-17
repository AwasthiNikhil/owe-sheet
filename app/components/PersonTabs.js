export default function PersonTabs({ entries, selected, setSelected }) {
    const people = [...new Set(entries.map(e => e.name))];
  
    return (
      <div style={{ width: 150, borderRight: '1px solid #ccc' }}>
        {people.map(name => (
          <div
            key={name}
            style={{
              padding: 10,
              cursor: 'pointer',
              background: selected === name ? '#eef' : 'transparent'
            }}
            onClick={() => setSelected(name)}
          >
            {name}
          </div>
        ))}
      </div>
    );
  }
  