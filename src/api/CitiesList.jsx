import React from 'react';
import axios from 'axios';

import styles from './apis.module.css';

export default class CitiesList extends React.Component {
  state = {
    cities: [],
  };

  componentDidMount() {
    axios.get(`https://backend-tcesp.herokuapp.com/municipios`).then((res) => {
      const cities = res.data;
      this.setState({ cities });
    });
  }
  render() {
    return (
      <div className={styles.ul}>
        <ul>
          {this.state.cities.map((city) => (
            <li>{city.municipio_extenso}</li>
          ))}
        </ul>
      </div>
    );
  }
}
