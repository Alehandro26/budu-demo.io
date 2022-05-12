import { useState } from "react";
import "./Menu.scss";

function Menu() {
  const [isActive, setIsActive] = useState(false);
  function burgerHandler() {
    setIsActive(!isActive);
  }

  return (
    <div className="menu">
      <div className="menu__line" onClick={burgerHandler}>
        <span></span>
      </div>
      <nav className={"menu__nav " + (isActive ? "active" : "")}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="" className="menu__link">
              Для жизни
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link">
              <div className="menu__link_flex">
                <span className="">Для бизнеса</span>
                <div className="menu__link_wrapper">
                  <img src="./img/arrow-down.svg" alt="" />
                </div>
              </div>
            </a>
          </li>
        </ul>
        <ul className="menu__list-bussines ">
          <li className="menu__item-bussines">
            <a href="" className="menu__link-bussines">
              Онлайн-программы
            </a>
          </li>
          <li className="menu__item-bussines">
            <a href="" className="menu__link-bussines">
              Чекапы
            </a>
          </li>
          <li className="menu__item-bussines">
            <a href="" className="menu__link-bussines">
              COVID
            </a>
          </li>
          <li className="menu__item-bussines">
            <a href="" className="menu__link-bussines">
              Медосмотры
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
