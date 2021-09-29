import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [cc, setCc] = useState('');
  const [data, setData] = useState('');

  const convert = (cc) => {
    let result = '';
    for (let i = 0; i < cc.length; i++) {
      if (cc[i] == ' ' && cc[i + 1] != ' ') {
        result += cc[i];
        result += cc[i + 1].toUpperCase();
        i += 1;
      } else {
        result += cc[i].toLowerCase();
      }
    }
    return result;
  };
  const abcd = convert(cc);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setCc(search);
  };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <form onSubmit={getSearch}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '50vw',
            height: '50vh',
          }}
        >
          <textarea
            cols="30"
            rows="10"
            value={search}
            onChange={updateSearch}
            style={{ color: 'red' }}
          ></textarea>
          <button>Convert</button>
          <h3 style={{color:'green'}}>{ abcd}</h3>
        </div>
      </form>
    </div>
  );
}
