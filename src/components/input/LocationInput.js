import "./location.css";

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
export default function LocationInput({ style, onFocus, onBlur }) {
  return (
    <div style={{ ...styles.container, ...style }}>
      <i
        className="fa fa-search"
        style={{ color: "white", marginLeft: "10px", marginRight: "10px" }}
      ></i>
      <span style={{ color: "white", marginRight: "3px" }}>|</span>

      <input
        onFocus={() => onFocus()}
        type="text"
        style={styles.input}
        placeholder="Kibo ou ye"
      />
    </div>
  );
}
