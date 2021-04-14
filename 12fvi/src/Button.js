import "./styles.css";
import React, { useState } from 'react'
export default function Button() {
const [count, setCount] = useState(18);
  return (<div className="btn">
      <button onClick={() => setCount(count + 1)}>
      Like!
      </button>Понравилось {count} пользователям!
      </div>
  );
}
