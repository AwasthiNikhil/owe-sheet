export default function PersonDetail({ name, entries }) {
    const personEntries = entries.filter(e => e.name === name);
  
    const net = personEntries.reduce((sum, e) => (
      e.type === 'owed' ? sum - e.amount : sum + e.amount
    ), 0);
  
    const status = net === 0
      ? 'Settled up'
      : net > 0
      ? `They owe you $${net}`
      : `You owe them $${Math.abs(net)}`;
  
    return (
      <div style={{ padding: 20 }}>
        <h2>{name}</h2>
        <p><strong>Net Balance:</strong> {status}</p>
        <ul>
          {personEntries.map(e => (
            <li key={e.id}>
              {e.date} – {e.type === 'owed' ? `I owe $${e.amount}` : `They owe me $${e.amount}`}
              {e.topic && ` (${e.topic})`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  