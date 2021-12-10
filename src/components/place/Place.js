import "./place.css";
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: "3vw",
  },
  image: {
    width: "20px",
    height: "auto",
  },
  text: {
    marginLeft: "20px",
  },
};

export default function Place({ style, img, text, onClick, data }) {
  function handleClick() {
    onClick(data);
  }
  return (
    <div onClick={handleClick} style={{ ...styles.container, ...style }}>
      <div style={styles.image}> {img}</div>
      <span style={styles.text}>{text}</span>
    </div>
  );
}
