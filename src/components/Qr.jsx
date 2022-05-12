import "./Qr.scss";

function Qr() {
  return (
    <div className="qr">
      <div className="qr__wrapper container">
        <img src="./img/qr.svg" alt="" />
        <h3>Скачать по QR</h3>
        <p>
          Наведите камеру смартфона на QR-код. Перейдите по отсканированной
          ссылке. Установите приложение.
        </p>
      </div>
    </div>
  );
}

export default Qr;
