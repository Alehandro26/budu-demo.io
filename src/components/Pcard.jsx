import "./Pcard.scss";

function Pcard({ title, subtitle, subtitle2, subtitle3, price }) {
  return (
    <div className="pcard">
      <h3>{title}</h3>
      <ul>
        <li>{subtitle}</li>
        <li>{subtitle2}</li>
        {subtitle3 && <li>{subtitle3}</li>}
      </ul>
      <span>{price}</span>
    </div>
  );
}

export default Pcard;
