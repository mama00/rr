const defaultStyle = {
  input: {
    border: "none",
    width: "100%",
    height: "30px",
  },
  text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "3",
    lineHeight: " 44px",
    color: "#AAB1C6",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px",
    width: "50%",
  },
};
export default function UserInput({ style, placeholder, img }) {
  return (
    <div style={defaultStyle.container}>
      <input style={defaultStyle.input} placeholder={placeholder} type="text" />
      {img}
    </div>
  );
}
