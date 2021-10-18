import React, { useState, useEffect } from 'react';

import { searchIncome } from '../../services/api';
import sanitize from '../../services/sanitize';

const Search = () => {
  const [city, setCity] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [expenditure, setExpenditure] = useState([]);
  const [income, setIncome] = useState([]);
  const [sanitized, setSanitized] = useState('');
  const [launch, setLaunch] = useState(false);

  var query = { sanitized, year, month };

  useEffect(() => {
    searchIncome(query)
      .then((res) => setIncome(res.data))
      .catch((err) => console.error(`Erro: ${err}`));
    setIncome([]);
    setExpenditure([]);
  }, [launch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = sanitize(city);
    setSanitized(temp);
    setLaunch(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Cidade: </label>
      <input
        type="text"
        required
        value={city}
        onInput={(e) => setCity(e.target.value)}
      />
      <label>Mês: </label>
      <input
        type="number"
        min="1"
        max="12"
        required
        value={month}
        onInput={(e) => setMonth(e.target.value)}
      />
      <label>Ano: </label>
      <input
        type="text"
        required
        value={year}
        onInput={(e) => setYear(e.target.value)}
      />
      <button onClick={(e) => setLaunch(true)}>Pesquisar</button>
    </form>
  );
};

export default Search;
