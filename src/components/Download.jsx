import "./Download.scss";

function Download() {
  return (
    <div className="download">
      <div className="download__wrapper container">
        <img className="download__icon" src="./img/Icon.svg" alt="" />
        <h3>Скачайте новое приложение</h3>
        <div className="download__windows">
          <img className="ios" src="./img/load.svg" alt="" />
          <img className="android" src="./img/load2.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Download;
