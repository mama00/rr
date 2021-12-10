import MenuButton from "../../components/menu/MenuButton";
import GoogleMapReact from "google-map-react";
import DrawerList from "../../components/drawer/Drawer";
import Drawer from "@mui/material/Drawer";
import Main from "../Main/Main";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, child } from "firebase/database";
import Driver from "../../components/Icons/Drivers/Driver";
import MyLocation from "../../components/MyLocation/MyLocation";

const defaultStyle = {
  MenuButton: {
    position: "absolute",
    left: "20px",
    top: "20px",
    width: "50px",
    height: "50px",
    zIndex: 1000,
  },
  center: {
    lat: 18.53917,
    lng: -72.3352627,
  },
  zoom: 9,
  container: {
    height: "100vh",
  },
  drawer: {
    width: "60vw",
  },
};
const database = getDatabase();

const company = "1";
const driversRef = child(ref(database, "localization"), company);

export default function Home() {
  const [drawer_state, set_drawer_state] = useState(false);

  const [list_drivers, set_list_drivers] = useState({});

  const [user_position, set_user_position] = useState({});

  function handleApiLoaded({ map, maps }) {}
  useEffect(() => {
    onValue(driversRef, (snapshot) => {
      let data = snapshot.val();
      console.log(data);
      set_list_drivers(data);
    });
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        function (position) {
          set_user_position({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => alert("SVP Fok ou aksepte ")
      );
    } else {
      alert("Ou pa gen aksè ak gps sou aparèy sa");
    }
  }, []);
  function toogleDrawer() {
    set_drawer_state(!drawer_state);
  }
  return (
    <div style={defaultStyle.container}>
      <MenuButton
        style={defaultStyle.MenuButton}
        onClickDrawer={toogleDrawer}
      />
      <Drawer
        style={defaultStyle.drawer}
        open={drawer_state}
        onClose={() => set_drawer_state(false)}
      >
        <DrawerList onClose={set_drawer_state} />
      </Drawer>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA1NLgxATIGTlJI8DM1YHs51fiE_7XjOKg" }}
        defaultCenter={defaultStyle.center}
        defaultZoom={defaultStyle.zoom}
      >
        {Object.keys(list_drivers).map((key, index) => {
          console.log(list_drivers[key]);
          return (
            <Driver
              key={key}
              lat={list_drivers[key]["localization"].latitude}
              lng={list_drivers[key]["localization"].longitude}
              user={list_drivers[key]["username"]}
            />
          );
        })}

        <MyLocation
          lat={user_position.latitude}
          lng={user_position.longitude}
        />
      </GoogleMapReact>

      <Main gps={user_position} />
    </div>
  );
}
