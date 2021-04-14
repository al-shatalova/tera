import "./styles.css";
import React, { useState } from 'react'
export default function Button() {
const [count, setCount] = useState(0);
  return (<div className="btn">
      <button onClick={() => setCount(count + 1)}>Понравилось!</button>
      <p>Понравилось {count} пользователям!</p>
      </div>
  );
}