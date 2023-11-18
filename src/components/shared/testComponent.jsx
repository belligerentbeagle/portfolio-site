import React, { useEffect, useState } from 'react';

function TestComponent() {
  const words = ["Computer Science + Psychology student at NUS 🧠.","problem solver 🤯.", 
  "Head of Product at NUS Google Devloper Student Club 🦖.", "Co-Founder at Surf 🏄 (funded start up).", 
  "piano noob 🎹.", "Hackathon winner 🏅."]; 
  const [typed, setTyped] = useState('');
  const [highlight, setHighlight] = useState(false);
  let idx = 0;

  const startType = (pun, index) => {
    if (index < pun.length) {
      setTyped((typed) => typed + pun.charAt(index));
      setTimeout(() => {
        startType(pun, index + 1);
      }, 50);
    } else {
      setTimeout(() => {
        setHighlight(true);
      }, 1000);
      setTimeout(() => {
        setHighlight(false);
        setTyped('');
        idx = idx < words.length - 1 ? idx + 1 : 0;
        startType(words[idx], 0);
      }, 2500);
    }
  };

  useEffect(() => {
    startType(words[0], 0);
  }, []);

  return (
    <div className={`variabletext ${highlight ? 'highlight' : ''}`} className="dark:text-primary-light">
      {typed}
    </div>
  );
}

export default TestComponent;