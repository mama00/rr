import im from "./../../img/pin.png";
const styles = {
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "6vh",
    marginTop: "1vh",
    marginBottom: "0vh",
  },
  image: {
    width: "20px",
    height: "20px",
    marginLeft: "10vw",
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
export default function ({ text, smalltext }) {
  return (
    <div
      style={{
        ...styles.container,
      }}
    >
      <img style={styles.image} src={im} />
      <div style={styles.minibox}>
        <span
          style={{
            ...styles.text,
            color: "#25E2D7",
            fontSize: "10px",
          }}
        >
          {smalltext}
        </span>
        <span style={styles.text}>{text}</span>
      </div>
    </div>
  );
}
