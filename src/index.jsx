import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CitiesList from './api/CitiesList'
import Button from './components/atoms/Button'
import { DateSelect, MonthSelect, TextInput } from './components/atoms/Input';

ReactDOM.render(
  <React.StrictMode>
    {/* <CitiesList /> */}
    <form>
    <TextInput label={"Cidade"} text={"Cidade "} placeholder={"Adamantina"} id={0}/>
    {/* <DateSelect label={"Mes"} text={"Mês"} placeholder={"Abril"} id={1}/> */}
    <MonthSelect />
    <DateSelect label={"Ano"} text={"Ano "} placeholder={"2020"} id={2}/>
    <br />
    <br />
    <Button label={"Click Me!"} type={"submit"}/>
    </form>
  </React.StrictMode>,
  document.getElementById('root')
);
