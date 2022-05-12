import "./Scard.scss";

function Scard({ img, title, subtitle, phone }) {
  return (
    <div className="scard">
      <div className="scard__flex">
        <div className="scard__main">
          <div className="scard__icon">
            <img src={img} />
          </div>
          <div className="scard__text">
            <h3 className="scard__title">{title}</h3>
            <p className="scard__subtitle">{subtitle}</p>
          </div>
        </div>
        {phone && (
          <div className="scard__img">
            <img className="scard__phone" src={phone}></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default Scard;
