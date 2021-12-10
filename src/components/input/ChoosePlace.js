import im from "./../../img/active_radio.png";
import imn from "./../../img/inactive_radio.png";

const styles = {
  container: {
    backgroundColor: "black",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    padding: "5px",
  },
  input: {
    border: "none",
    backgroundColor: "black",
    color: "white",
    width: "100%",
    position: "relative",
    top: "3px",
  },
};
export default function LocationInput({
  style,
  autoFocus,
  onFocus,
  active,
  onChange,
  value,
}) {
  function handleInput(e) {
    onChange(e);
  }
  console.log("set value", value);

  return (
    <div style={{ ...styles.container, ...style }}>
      <img
        src={active ? im : imn}
        style={{ width: "20px", heigth: "auto", marginRight: "15px" }}
      />
      <span style={{ color: "white", marginRight: "3px" }}>|</span>

      <input
        onFocus={() => onFocus()}
        autoFocus={autoFocus}
        type="text"
        style={styles.input}
        onChange={handleInput}
        value={value != "" ? value : null}
      />
    </div>
  );
}
