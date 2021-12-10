import HomeIcon from "../../components/Icons/home/HomeIcon";
import LocationInput from "../../components/input/LocationInput";
import ChoosePlace from "../../components/input/ChoosePlace";

import Place from "../../components/place/Place";
import SwipeableDrawerView from "../../components/SwipableDrawerView/SwipableDrawerView";
import motom from "../../img/motom_menu.png";
import WorkIcon from "../../components/Icons/work/WorkIcon";
import { useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useEffect } from "react";
import MyLocation from "./../../components/Icons/mylocation/MyLocation";
import Pin from "../../components/Icons/pin/Pin";
import Checkbox from "../../components/CheckBox/CheckBox";
import { Button } from "@mui/material";
import progress from "./../../img/progress.png";
import Target from "../../components/Target/Target";
import dollar from "./../../img/dollar-sign.png";
const styles = {
  image: {
    widht: "40px",
    height: "40px",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  mini_container: {
    display: "flex",
    width: "80vw",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default function Main(gps) {
  const [open, setOpen] = useState(false);
  const [autoFocusInput, setAutoFocusInput] = useState(0);
  const toogleOpen = () => {
    setOpen(!open);
  };
  const [from, setFrom] = useState({ description: "", place_id: "" });
  const [to, setTo] = useState({ description: "", place_id: "" });
  const [step, setStep] = useState(0);
  const [driverSelected, setDriverSelected] = useState(0);
  const [typeDrive, setTypeDrive] = useState(0);
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const onPlaceSelected = (data) => {
    console.log(data);
    if (data.type == "gps") {
      if (autoFocusInput == 0 || open == false) {
        setFrom({
          description: "Pozisyon mwen",
          place_id: JSON.stringify(data.gps),
        });
      } else {
        setTo({
          description: "Pozisyon mwen",
          place_id: JSON.stringify(data.gps),
        });
      }
    } else {
      if (autoFocusInput == 0) {
        setFrom({
          description: data.description,
          place_id: data.place_id,
        });
      } else {
        setTo({
          description: data.description,
          place_id: data.place_id,
        });
      }
    }
  };
  const handlePlaceChange = (e) => {
    if (autoFocusInput == 0) {
      setFrom({ description: "", place_id: "" });
    } else {
      setTo({ description: "", place_id: "" });
    }
    setValue(e.target.value);
  };

  const cancelOpen = () => {
    clearSuggestions();
    setFrom({ description: "", place_id: "" });
    setTo({ description: "", place_id: "" });

    setOpen(false);
    setStep(0);
  };

  const confirmLocation = () => {
    setOpen(false);
    setStep(1);
  };

  const render = () => {
    if (step == 0) {
      return render_choose_trip();
    } else if (step == 1) {
      return render_choose_driver();
    } else if (step == 2) {
      return render_choose_type();
    } else if (step == 3) {
      return render_resume();
    }
  };

  const render_resume = () => {
    function done() {
      alert("Mèsi paske ou chwazi Motom Chofè ou ap vini");
    }
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "-2vh",
            justifyContent: "space-around",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <img src={motom} style={styles.image} />
          <p style={{ color: "#25E2D7" }}>Konfime chimen ou</p>
          <img src={progress} style={{ width: "80vw", height: "3px" }} />
          <Target text={from.description} smalltext="Soti nan" />
          <Target text={to.description} smalltext="Rive nan" />
          <p style={{ color: "white" }}>
            <span>Pri traje ak chofè a</span>
            <img src={dollar} style={{ width: "15px", height: "auto" }} />
            150 GDS
          </p>
          <img src={progress} style={{ width: "80vw", height: "3px" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            marginTop: "1vh",
          }}
        >
          <Button
            style={{
              marginTop: "1vh",
              backgroundColor: "#25E2D7",
              color: "black",
              width: "30%",
            }}
            onClick={done}
            variant="contained"
          >
            Konfime
          </Button>
          <Button
            style={{
              marginTop: "1vh",
              backgroundColor: "#25E2D7",
              color: "black",
              width: "30%",
            }}
            onClick={cancelOpen}
            variant="contained"
          >
            Anile
          </Button>
        </div>
      </div>
    );
  };

  const render_choose_type = () => {
    function handle_type_selection(i) {
      setTypeDrive(i);
    }
    function viewResume() {
      setStep(3);
    }
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1vh",
            justifyContent: "space-around",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <img src={motom} style={styles.image} />
          <p style={{ color: "#25E2D7" }}>
            Eske se pou yon woulib ou pou yon komisyon
          </p>
        </div>
        <Checkbox
          onClick={() => handle_type_selection(0)}
          checked={typeDrive == 0}
          text="Woulib"
        />
        <Checkbox
          onClick={() => handle_type_selection(1)}
          checked={typeDrive == 1}
          text="Komisyon"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            marginTop: "1vh",
          }}
        >
          <Button
            style={{
              marginTop: "1vh",
              backgroundColor: "#25E2D7",
              color: "black",
              width: "30%",
            }}
            onClick={viewResume}
            variant="contained"
          >
            Konfime
          </Button>
          <Button
            style={{
              marginTop: "1vh",
              backgroundColor: "#25E2D7",
              color: "black",
              width: "30%",
            }}
            onClick={cancelOpen}
            variant="contained"
          >
            Anile
          </Button>
        </div>
      </div>
    );
  };

  const render_choose_driver = () => {
    function handle_driver_selection(i) {
      setDriverSelected(i);
    }
    function chooseTypeRide() {
      setStep(2);
    }
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1vh",
            justifyContent: "space-around",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <img src={motom} style={styles.image} />
          <p style={{ color: "#25E2D7" }}>Chwazi chofè motom ou</p>
        </div>
        <Checkbox
          onClick={() => handle_driver_selection(0)}
          checked={driverSelected == 0}
          text="Jeff"
          smalltext="-4 km"
        />
        <Checkbox
          onClick={() => handle_driver_selection(1)}
          checked={driverSelected == 1}
          text="Toi"
          smalltext="-11km"
        />
        <Checkbox
          onClick={() => handle_driver_selection(2)}
          checked={driverSelected == 2}
          text="Moi"
          smalltext="-23km"
        />
        <Button
          style={{
            marginTop: "1vh",
            backgroundColor: "#25E2D7",
            color: "black",
          }}
          onClick={chooseTypeRide}
          variant="contained"
        >
          Chwazi Motom
        </Button>
      </div>
    );
  };
  const render_choose_trip = () => {
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {open && (
            <p onClick={cancelOpen} style={{ color: "white" }}>
              Anile
            </p>
          )}
          <img src={motom} style={styles.image} />
          {open && (
            <p onClick={confirmLocation} style={{ color: "white" }}>
              Konfime
            </p>
          )}
        </div>
        <div style={styles.mini_container}>
          {!open ? (
            <LocationInput
              onFocus={toogleOpen}
              style={{ width: "90%", height: "30px", marginTop: "20px" }}
            />
          ) : (
            <ChoosePlace
              autoFocus={autoFocusInput == 0}
              style={{ width: "90%", height: "30px", marginTop: "20px" }}
              active={autoFocusInput == 0}
              onFocus={() => setAutoFocusInput(0)}
              onChange={handlePlaceChange}
              value={from.description}
            />
          )}

          {open && (
            <ChoosePlace
              autoFocus={autoFocusInput == 1}
              style={{ width: "90%", height: "30px", marginTop: "20px" }}
              active={autoFocusInput == 1}
              onFocus={() => setAutoFocusInput(1)}
              onChange={handlePlaceChange}
              value={to.description}
            />
          )}
          <Place
            img={<MyLocation style={{ width: "25px", height: "25px" }} />}
            text="Pozisyon mwen"
            style={{ marginTop: "15px" }}
            data={{ type: "gps", value: gps }}
            onClick={() => {
              onPlaceSelected({ type: "gps", value: gps });
              setOpen(true);
            }}
          />

          {data.map((e, i) => {
            return (
              <Place
                key={e.place_id}
                img={<Pin style={{ width: "25px", height: "25px" }} />}
                text={e.description}
                style={{ marginTop: "15px" }}
                onClick={onPlaceSelected}
                data={e}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <SwipeableDrawerView style={{ zIndex: 1000 }} open={open}>
      {render()}
    </SwipeableDrawerView>
  );
}
