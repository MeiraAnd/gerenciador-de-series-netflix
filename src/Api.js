import axios from 'axios';
import NewSeries from './NewSeries';

const api = axios.create({
    baseURL: 'http://localhost:3001/'
});

export const loadGenres = () => api.get('genres');
export const saveSeries = (NewSeries) => api.post('series', NewSeries);
export const LoadSeriesByGenre = (genres) => api.get('series?genres='+genres);

const apis = {
    loadGenres: loadGenres,
    saveSeries: saveSeries,
    LoadSeriesByGenre: LoadSeriesByGenre
}

export default apis;