import { Axios } from '../../api/_http';
import { HttpResponseGenres, Genres } from './genres.type';

const getMovieGenres = async (): Promise<Genres[]> => {
  try {
    const data = await Axios.get<HttpResponseGenres>('/genre/movie/list');
    return data.data.genres;
  } catch ({ response }) {
    throw response.data;
  }
};

const getTvGenres = async (): Promise<Genres[]> => {
  try {
    const data = await Axios.get<HttpResponseGenres>('/genre/tv/list');
    return data.data.genres;
  } catch ({ response }) {
    throw response.data;
  }
};

export { getMovieGenres, getTvGenres };
