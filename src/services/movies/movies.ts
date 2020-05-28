import { Axios } from '../../api/_http';
import { HttpResponseMovies } from './movies.type';

const getPopularMovies = async (): Promise<HttpResponseMovies> => {
  try {
    const data = await Axios.get<HttpResponseMovies>('/movie/popular');
    return data.data;
  } catch ({ response }) {
    throw response.data;
  }
};

export { getPopularMovies };
