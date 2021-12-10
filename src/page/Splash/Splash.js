import "./Splash.css";
import Logo from "../../components/logo/logo";
import PoweredBy from "../../components/poweredby/powered";
export default function Splash({}) {
  return (
    <div className="sp-wrapper">
      <Logo style={{ width: "100px", height: "100px" }} />

      <PoweredBy
        textStyle={{ fontFamily: "", textAlign: "center" }}
        style={{
          width: "100px",
          height: "50px",
          position: "absolute",
          bottom: "100px",
        }}
      />
    </div>
  );
}
