import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <div>{fetchUrl}</div>
    </div>
  );
}

export default Row;
