import "./Card.scss";

function Card({ title, subtitle, button, img }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__number"></div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <button className="card__button">{button}</button>
      </div>
      <div className="card__phone">
        <img className="card__image" src={img}></img>
      </div>
    </div>
  );
}

export default Card;
