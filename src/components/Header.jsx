import "./Header.scss";
import Menu from "./Menu";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__flex">
          <div className="header__body">
            <Menu></Menu>
            <nav className="header__menu-des">
              <a href="#">Для жизни</a>
              <a href="#">Для бизнеса</a>
              <a href="#">Клиники</a>
              <a href="#">О нас</a>
            </nav>
            <div className="header__logo">
              <img className="logo" src="./img/Logo.svg" alt="" />
              <img className="logo2" src="./img/Logo2.svg" alt="" />
            </div>
          </div>
          <div className="header__button">
            <button className="button">Заявка</button>
            <button className="button-des">Оставить заявку</button>
          </div>
        </div>
        <hr />
        <nav className="header__menu-bus">
          <a href="#">Онлайн-программы</a>
          <a href="#">Медосмотры</a>
          <a href="#">Чекапы </a>
          <a href="#">Covid</a>
          <a href="#">Анализ здоровья </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
