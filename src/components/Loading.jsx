import Download from "./Download";
import "./Loading.scss";
import Qr from "./Qr";

function Loading() {
  return (
    <div className="loading">
      <div className="loading__wrapper container">
        <Download></Download>
        <Qr></Qr>
      </div>
    </div>
  );
}

export default Loading;
