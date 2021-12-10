import AA from "../../img/AA.png";
import "./index.css";
export default function ({ style, textStyle }) {
  return (
    <div style={style}>
      <p className="text-powered" style={textStyle}>
        Powered by
      </p>
      <img src={AA} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
