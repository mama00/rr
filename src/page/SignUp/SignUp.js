import "./SignUp.css";
import Logo from "../../components/logo/logo";
import PoweredBy from "../../components/poweredby/powered";
import UserInput from "../../components/input/UserInput";
import PasswordInput from "../../components/input/PasswordInput";

const defaultStyle = {
  inputs: {
    display: "flex",
    marginTop: "10vh",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
};
export default function SignUp({}) {
  return (
    <div className="si-wrapper">
      <Logo
        style={{
          width: "100px",
          height: "100px",
          position: "relative",
          top: "-50px",
        }}
      />
      <div style={defaultStyle.inputs}>
        <UserInput
          placeholder="Nom itilizatè"
          img={<i className="fa fa-user-o"></i>}
        />

        <PasswordInput
          placeholder="Mo de pas"
          img={<i className="fa fa-lock"></i>}
        />
      </div>

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
