import Logo from "../logo/logo";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LogoWhite from "../logowhite/LogoWhite";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

const green = "#25E2D7";
const defaultStyle = {
  container: {
    backgroundColor: "#555C6D",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "300px",
  },
  close: {
    position: "absolute",
    right: "20px",
    top: "20px",
    fontSize: "25px",
    color: "#25E2D7",
  },
};

export default function DrawerList({ onClose }) {
  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen(!open);
  };
  return (
    <div style={defaultStyle.container}>
      <div style={defaultStyle.close}>
        {" "}
        <i className="fa fa-times" onClick={() => onClose(false)}></i>
      </div>
      <LogoWhite
        style={{ width: "100px", height: "100px", marginTop: "15vh" }}
      />
      <List style={{ marginTop: "5vh", width: "100%" }}>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <i className="fa fa-user-o" style={{ color: green }}></i>
          </ListItemIcon>
          <ListItemText style={{ color: "white" }} primary="Kont ou" />
          {open ? (
            <i className="fa fa-chevron-down" style={{ color: green }} />
          ) : (
            <i className="fa fa-chevron-right" style={{ color: green }} />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText style={{ color: "white" }} primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <i className="fa fa-usd" style={{ color: green }}></i>
          </ListItemIcon>
          <ListItemText style={{ color: "white" }} primary="Mòd Pèman" />

          <i className="fa fa-chevron-right" style={{ color: green }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <i className="fa fa-clock-o" style={{ color: green }}></i>
          </ListItemIcon>
          <ListItemText style={{ color: "white" }} primary="Istorik trajè" />

          <i className="fa fa-chevron-right" style={{ color: green }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <i className="fa fa-file-text-o" style={{ color: green }}></i>
          </ListItemIcon>
          <ListItemText style={{ color: "white" }} primary="Detay chofè" />

          <i className="fa fa-chevron-right" style={{ color: green }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <i className="fa fa-user-o" style={{ color: green }}></i>
          </ListItemIcon>
          <ListItemText style={{ color: "white" }} primary="modifye trajè" />

          <i className="fa fa-chevron-right" style={{ color: green }} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <i className="fa fa-user-o" style={{ color: green }}></i>
          </ListItemIcon>
          <ListItemText style={{ color: "white" }} primary="konfigirasyon" />

          <i className="fa fa-chevron-right" style={{ color: green }} />
        </ListItemButton>
      </List>
    </div>
  );
}
