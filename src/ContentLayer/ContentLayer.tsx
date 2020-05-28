import React, { useEffect, useState } from 'react';
import './ContentLayer.scss';
import { getMovieGenres } from '../services/genres/genres';
import HeaderDropdown from '../components/Header/HeaderDropdown/HeaderDropdown';
import { Error } from '../api/_http.type';
import Header from '../components/Header/Header';
import { Genres } from '../services/genres/genres.type';

const useFetchGenre = (): [Array<Genres>, boolean, Error | null] => {
  const [data, setData] = useState<Array<Genres>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  console.log('hai');
  useEffect(() => {
    setIsLoading(true);
    getMovieGenres()
      .then((res: Genres[]) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return [data, isLoading, error];
};

const ContentLayer = (): JSX.Element => {
  const [data, isLoading, error] = useFetchGenre();
  return (
    <React.Fragment>
      <Header>
        <HeaderDropdown title="Фильмы" genres={data} isLoading={isLoading} error={error} />
      </Header>
      <div className="container">
        <div>
          <div>Popular movies</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentLayer;
