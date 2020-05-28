import * as React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <div>Лого</div>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
