import driver from "../../../img/Moto.png";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
const styles = {
  img: {
    width: "45px",
    height: "auto",
  },
};
function Icon({ style }) {
  return (
    <div className="driver">
      <img src={driver} style={{ ...styles.img, ...style }} />
    </div>
  );
}

export default function ({ user }) {
  return (
    <Tooltip title={user} placement="top">
      <IconButton>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
