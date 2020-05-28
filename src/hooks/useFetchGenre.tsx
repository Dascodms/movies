import React, { useState, useEffect } from 'react';

import { Genres } from '../services/genres/genres.type';
import { getMovieGenres, getTvGenres } from '../services/genres/genres';
import { Error } from '../api/_http.type';

const useFetchGenre = (tv: boolean): [Array<Genres>, boolean, Error | null] => {
  const [genres, setGenres] = useState<Array<Genres>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const get = tv ? getTvGenres : getMovieGenres;

  useEffect(() => {
    setIsLoading(true);
    get()
      .then((res: Genres[]) => {
        setGenres(res);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return [genres, isLoading, error];
};

export { useFetchGenre };
