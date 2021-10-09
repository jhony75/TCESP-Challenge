import React from 'react';
import Button from '../../atoms/Button'
import { TextInput, DateSelect, MonthSelect } from '../../atoms/Input'

import './search.css'

const Search = () => {
  return (
    <div className="GridWrapper">
      <h1> Portal Unificado de Transparencia </h1>
      <form>
        <div className="Inputs">
        <div className="cityInput">
          <TextInput label={"Cidade"} text={"Cidade"} placeholder={"Adamantina"} id={"nomeCidade"} />
        </div>
        <div className="monthInput">
          <MonthSelect />
        </div>
        <div className="yearInput">
          <DateSelect label={"Ano"} text={"Ano"} placeholder={"2020"} id={"ano"} />
        </div>
      </div>
      <div className="Button">
        <Button label={"Buscar!"} type={"submit"}/>
      </div>
      </form>
    </div>
  )
}

export default Search