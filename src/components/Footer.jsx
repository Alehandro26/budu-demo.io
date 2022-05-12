import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__flex">
          <div className="footer__clinic">
            <h4>Услуги оказывают клиники:</h4>
            <p className="medcorp">
              ООО «Медкорп», лицензия № ЛО-50-01-009076 от 10.10.2017. Адрес:
              115114, г. Москва, Дербеневская наб. д. 7, стр. 22, этаж 4, часть
              пом.XIII
            </p>
            <p className="ren">
              ООО «РенКлиника», лицензия № ЛО-78-011474 от 08.02.2021. Адрес:
              191025, г. Санкт-Петербург, Кузнечный пер., 2/4 лит. Б, 2Н, 3Н,
              4Н, 8Н, 9Н, 10Н, 13Н, 2ЛК, часть пом. 12-Н (часть пом. 1, пом.
              2-6)
            </p>
            <h5>АО «Цифровые технологии здоровья»</h5>
          </div>
          <div className="footer__doc">
            <h5>Юридические документы</h5>
            <ul>
              <li>
                <a className="footer__link" href="">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a className="footer__link" href="">
                  Политика обработки персональных данных
                </a>
              </li>
              <li>
                <a className="footer__link" href="">
                  Договор возмездного оказания медицинских услуг
                </a>
              </li>
              <li>
                <a className="footer__link" href="">
                  Информация о партнерах
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src="./img/Skolkovo.svg" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
