import hb from "./../../img/Hamburger Menu.png";
export default function MenuButton({ style, onClickDrawer }) {
  return (
    <div onClick={() => onClickDrawer()}>
      <img src={hb} style={style} />
    </div>
  );
}
