import React, { useState } from 'react';

import api from '../../services/api';

import './search.css';
import styles from './search.module.css';

const Search = () => {
  const [city, setCity] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [expenditure, setExpenditure] = useState([]);
  const [income, setIncome] = useState([]);

  const headerExpense = [
    'Orgão',
    'Empenho',
    'N° Empenho',
    'Fornecedor',
    'N° Fornecedor',
    'Data',
    'Valor',
  ];
  const headerIncome = [
    'Orgão',
    'Fonte',
    'Aplicação',
    'Título',
    'Subtítulo',
    'Valor',
  ];

  const sanitize = (text) =>
    text
      .replace(/\s|_|\(|\)| /g, '-')
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();

  const searchExpenditure = (query) => {
    api
      .post('/despesas', {
        municipio: query.sanitized,
        ano: query.year,
        mes: query.month,
      })
      .then((response) => setExpenditure(response.data))
      .catch((err) => {
        console.error('ERRO: ' + err);
      });
  };

  const searchIncome = (query) => {
    api
      .post('/receitas', {
        municipio: query.sanitized,
        ano: query.year,
        mes: query.month,
      })
      .then((response) => setIncome(response.data))
      .catch((err) => {
        console.error('ERRO: ' + err);
      });
  };

  const searchCity = (query) => {
    searchExpenditure(query);
    searchIncome(query);
  };

  const clearStates = () => {
    setExpenditure([]);
    setIncome([]);
  };

  const handleSubmit = (e) => {
    let sanitized = sanitize(city);
    console.log(sanitized);
    const query = { sanitized, month, year };
    e.preventDefault();
    searchCity(query);
    clearStates();
  };

  return (
    <>
      <h1>Portal Unificado de Transparencia</h1>
      <div className="Inputs">
        <form onSubmit={handleSubmit}>
          <label>Cidade: </label>
          <input
            type="text"
            required
            value={city}
            onInput={(e) => setCity(e.target.value)}
          />
          <label>Mês: </label>
          <select
            required
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="0"></option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <input
            type="text"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button>Pesquisar</button>
        </form>
      </div>
      <div className={styles.tableSection}>
        <h2>Despesas</h2>
        <table className="tg">
          <thead>
            <tr>
              {headerExpense.map((header, index) => (
                <th key={index} className="tg-0pky">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expenditure.map((expense, index) => (
              <tr key={index}>
                <td className="tg-btxf"> {expense.orgao} </td>
                <td className="tg-btxf"> {expense.evento} </td>
                <td className="tg-btxf"> {expense.nr_empenho} </td>
                <td className="tg-btxf"> {expense.id_fornecedor} </td>
                <td className="tg-btxf"> {expense.nm_fornecedor} </td>
                <td className="tg-btxf"> {expense.dt_emissao_despesa} </td>
                <td className="tg-btxf"> R$ {expense.vl_despesa} </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Receitas</h2>
        <table className="tg">
          <thead>
            <tr>
              {headerIncome.map((header, index) => (
                <th key={index} className="tg-0pky">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {income.map((income, index) => (
              <tr key={index}>
                <td className="tg-btxf"> {income.orgao} </td>
                <td className="tg-btxf"> {income.ds_fonte_recurso} </td>
                <td className="tg-btxf"> {income.ds_cd_aplicacao_fixo} </td>
                <td className="tg-btxf"> {income.ds_alinea} </td>
                <td className="tg-btxf"> {income.ds_subalinea} </td>
                <td className="tg-btxf"> R$ {income.vl_arrecadacao} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Search;
