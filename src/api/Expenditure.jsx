import React from 'react';
import axios from 'axios';

export default class Expenditure extends React.Component {
  state = {
    orgao: '',
    mes: '',
    evento: '',
    nr_empenho: '',
    id_fornecedor: '',
    nm_fornecedor: '',
    dt_emissao_despesa: '',
    vl_despesa: '',
  }

  handleChange = event => {
    this.setState({orgao: event.target.value});
    this.setState({mes: event.target.value});
    this.setState({evento: event.target.value});
    this.setState({nr_empenho: event.target.value});
    this.setState({id_fornecedor: event.target.value});
    this.setState({nm_fornecedor: event.target.value});
    this.setState({dt_emissao_despesa: event.target.value});
    this.setState({vl_despesa: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const city = {
      orgao: this.state.orgao,
      mes: this.state.mes,
      evento: this.state.evento,
      nr_empenho: this.state.nr_empenho,
      id_fornecedor: this.state.id_fornecedor,
      nm_fornecedor: this.state.nm_fornecedor,
      dt_emissao_despesa: this.state.dt_emissao_despesa,
      vl_despesa: this.state.vl_despesa,
    };

    axios.post(`https://backend-tcesp.herokuapp.com/despesas`, { city })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome da Cidade:
            <input type="text" name="orgao" onChange={this.handleChange} />
          </label>
          <button type="submit">Buscar</button>
        </form>
      </div>
    )
  }
}