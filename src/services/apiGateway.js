import axios from 'axios';
import API_URL from '../apiConfig/config';

export default class ApiGateway {
  static get(endpoint, params) {
    const url = `${API_URL}/${endpoint}`;
    return axios.get(url, { params });
  }

  static post(endpoint, body) {
    const url = `${API_URL}/${endpoint}`;
    return axios.post(url, body);
  }
}
