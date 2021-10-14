import React, { useState } from 'react';
import api from '../../services/api'
import './search.css'
import styles from './search.module.css'

const Search = () => {
  const [city, setCity] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [expenditure, setExpenditure] = useState([
    // orgao: "",
    // mes: "",
    // evento: "",
    // nr_empenho: "",
    // id_fornecedor: "",
    // nm_fornecedor: "",
    // dt_emissao_despesa: "",
    // vl_despesa: "",
  ]);
  const [income, setIncome] = useState('');

  const query = { city, month, year };

  const searchExpenditure = (query) => {
    api
      .post("/despesas", {
        municipio: query.city,
        ano: query.year,
        mes: query.month
      })
      .then((response) => setExpenditure(response.data))
      .catch((err) => {
        console.error("ERRO: " + err)
      })
  }

  const searchIncome = (query) => {
    api
      .post("/receitas", {
        municipio: query.city,
        ano: query.year,
        mes: query.month
      })
      .then((response) => setIncome(response.data))
      .catch((err) => {
        console.error("ERRO: " + err)
      })
  }

  const searchCity = (query) => {
    console.log(searchExpenditure(query))
    console.log(searchIncome(query))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    searchCity(query);
  }

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
          onChange={(e) => setCity(e.target.value)}
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
    <div className="Debug">
      <p>Cidade: {city}</p>
      <p>Mes: {month}</p>
      <p>Ano: {year}</p>
      <br />
      <hr />
      <br />
    </div>
    <div className={styles.Table}>
      { expenditure.map(expense => (
        <>
        <p> {expense.orgao} </p>
        <p> {expense.mes} </p>
        <p> {expense.evento} </p>
        <p> {expense.nr_empenho} </p>
        <p> {expense.id_fornecedor} </p>
        <p> {expense.nm_fornecedor} </p>
        <p> {expense.dt_emissao_despesa} </p>
        <p> {expense.vl_despesa} </p>
        <hr />
        </>
      ))}
    </div>
    </>
  )
}

export default Search