import React from 'react';
// import styles from './atoms.module';

const TextInput = ({ label, text, placeholder, id }) => {
  return(
    <>
      <label for={label}>{text}</label>
      <input type="text" id={id} name={label} placeholder={placeholder} />
    </>
  )
}

const DateSelect = ({ label, text, placeholder, id }) => {
  return (
    <>
       <label for={label}>{text}</label>
       <input type="text" id={id} name={label} placeholder={placeholder} />
     </>
   )
 }

const MonthSelect = () => {
  return (
    <>
      <select name="Meses">
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
    </>
  )
}

export {
  TextInput,
  DateSelect,
  MonthSelect
}