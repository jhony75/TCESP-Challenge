import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-tcesp.herokuapp.com',
});

const searchIncome = (query) => {
  return api.post('/receitas', {
    municipio: query.sanitized,
    ano: query.year,
    mes: query.month,
  });
};

export default api;

export { searchIncome };
