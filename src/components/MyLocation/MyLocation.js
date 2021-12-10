import me from "../../img/active_radio.png";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
const styles = {
  img: {
    width: "25px",
    height: "auto",
  },
};
function Icon({ style }) {
  return (
    <div className="driver">
      <img src={me} style={{ ...styles.img, ...style }} />
    </div>
  );
}

export default function () {
  return (
    <Tooltip title={"Mwe"} placement="top">
      <IconButton>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
