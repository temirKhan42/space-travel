import React from 'react';
import { Link } from 'react-router-dom';

export default function Destination() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Destination</h2>
      <Link to="/">Home</Link>
    </main>
  );
}
