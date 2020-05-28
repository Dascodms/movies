import * as React from 'react';
import './HeaderDropdown.scss';
import { Error } from '../../../api/_http.type';
import { Genres } from '../../../services/genres/genres.type';

type HeaderDropdownProps = {
  title: string;
  genres: Genres[];
  error: Error | null;
  isLoading: boolean;
};

const HeaderDropdown = ({ title, genres, error, isLoading }: HeaderDropdownProps): JSX.Element => {
  return (
    <div className="header__item dropdown">
      <button className="dropdown__title">{title}</button>
      <div className="dropdown__wrapper">
        <div className="dropdown__content">
          {genres.map((genre) => {
            return (
              <div className="dropdown__item" key={genre.id}>
                {genre.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;
