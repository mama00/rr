import im from "./../../img/active_radio.png";
import imn from "./../../img/inactive_radio.png";
const styles = {
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(189, 255, 251, 0.36)",
    height: "6vh",
  },
  image: {
    width: "20px",
    height: "20px",
    marginLeft: "20vw",
  },
  text: {
    color: "white",
  },
  minibox: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10vw",
  },
};
export default function ({ checked, text, smalltext, onClick, data }) {
  function handleClick() {
    onClick();
  }
  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: checked ? "rgba(189, 255, 251, 0.36)" : "",
      }}
      onClick={handleClick}
    >
      <img style={styles.image} src={checked ? im : imn} />
      <div style={styles.minibox}>
        <span style={styles.text}>{text}</span>
        <span style={{ ...styles.text, marginLeft: "-8px" }}>{smalltext}</span>
      </div>
    </div>
  );
}
