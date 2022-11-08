import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="top_header">
        <div>
          <a className="top_header_menu_item" href="#">
            Главная
          </a>
          <a className="top_header_menu_item" href="#">
            Новости
          </a>
          <a className="top_header_menu_item" href="#">
            Pазмещения и тарифы
          </a>
          <a className="top_header_menu_item" href="#">
            Объявления на карте
          </a>
          <a className="top_header_menu_item" href="#">
            Контакты
          </a>
        </div>
        <div>
          <a href="#">Закладки</a>
          <a href="#">Вход и регистрация</a>
        </div>
      </div>
      <div className="low_header">
        <div>Logo</div>
        <nav className='nav'>
          <a href="#" className="nav_item"></a>
          <a href="#" className="nav_item"></a>
          <a href="#" className="nav_item"></a>
          <a href="#" className="nav_item"></a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
