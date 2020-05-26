import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from "react";
import "./style/map.css";

import { Button } from "./components/library.js";
import { Input } from "./components/library.js";

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const defaultZoom = 14;
const defaultCenterCoords = {
    lat: 55.6105187,
    lng: 37.7337732,
};

// temp
const place = {
    name: "Dodo Pizza",
    logoURL:
        "https://fontslogo.com/wp-content/uploads/2015/07/Pizza-Hut-Logo-Font-150x150.jpg",
    coords: {
        lat: 55.612776,
        lng: 37.747163,
    },
};

// this block will be recieving a position from parent component and
// put that in props of the map component
export default () => {
    const [center, setCenter] = useState(defaultCenterCoords);
    const [{ mapInst, Maps }, setMaps] = useState({
        mapInst: null,
        Maps: null,
    });

    const [address, setAddress] = useState("");

    const onAutolocate = async () => {
        try {
            const pos = await autolocate();
            setCenter(pos);
        } catch (err) {
            console.log("Error in autolocation", err);
            alert("Ошибка при определении местоположения");
        }
    };
    const onDone = async (e) => {
        e && e.preventDefault();
        try {
            const pos = await fetchCoordinatesByAddress(
                address,
                REACT_APP_GOOGLE_API_KEY
            );
            setCenter(pos);
        } catch (err) {
            console.log("Error in getting coordinates by address", err);
            alert("Ошибка при определении местоположения");
        }
    };

    return (
        <div className="map">
            <div className="map__map">
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <GoogleMapReact
                        center={center}
                        defaultZoom={defaultZoom}
                        yesIWantToUseGoogleMapApiInternals
                        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_API_KEY }}
                        onGoogleApiLoaded={({ map, maps }) =>
                            setMaps({ mapInst: map, Maps: maps })
                        }
                        onChange={({ center }) => setCenter(center)}
                    >
                        <LogoOnMap {...place.coords} {...place} />
                        <Area
                            Maps={Maps}
                            mapInst={mapInst}
                            color="#FA7921"
                            coords={place.coords}
                            radius={1000}
                        />
                    </GoogleMapReact>
                    <HereIndicator />
                </div>
            </div>
            <form className="map__form" onSubmit={onDone}>
                <p className="map__text-zone">
                    У этого заведения есть зона доставки, для заказа вы должны
                    находиться в ней
                </p>

                <Button
                    elementStyle={"blue"}
                    addClasses={"map__button-allow"}
                    handleFunction={onAutolocate}
                >
                    Разрешите доступ к вашему местоположению
                </Button>

                <p className="map__text-adress">
                    или введите адрес доставки (улица и дом)
                </p>

                <Input
                    handleFunction={setAddress}
                    addClasses={"map__input-adress"}
                ></Input>

                <Button
                    elementStyle={"orange"}
                    addClasses={"map__button-ready"}
                    handleFunction={onDone}
                >
                    Готово
                </Button>
            </form>
        </div>
    );
};

const LogoOnMap = ({ name, logoURL }) => (
    <div
        style={{
            display: "inline-flex",
            borderRadius: 5,
            border: "3px solid #FA7921",
            transform: "translate(-50%, -50%)",
        }}
    >
        <img
            style={{ maxWidth: 50, maxHeight: 50 }}
            src={logoURL}
            title={name}
            alt={name}
        />
    </div>
);

const Area = ({ mapInst, Maps, coords, color, radius }) => {
    useEffect(() => {
        if (!Maps || !mapInst) return;

        const circle = new Maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            map: mapInst,
            center: coords,
            radius,
        });
        return () => circle.setMap(null);
    }, [mapInst, Maps, coords, color, radius]);
    return null;
};

const autolocate = (enableHighAccuracy = true) =>
    new Promise((resolve, reject) => {
        const geo = window.navigator.geolocation;
        if (!geo) {
            reject(new Error("Your browser doesn't support geolocation"));
            return;
        }
        geo.getCurrentPosition(
            (pos) => {
                resolve({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            (err) => {
                reject(err);
            },
            { enableHighAccuracy }
        );
    });

const fetchCoordinatesByAddress = async (address, googleApiKey) => {
    let resp = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`
    );
    let info = await resp.json();
    console.log("resp", info);
    let result = info.results[0];
    if (!result) return {};
    return result.geometry.location;
};

const HereIndicator = () => {
    return (
        <div
            style={{
                position: "absolute",
                zIndex: 1,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -100%)",
                height: 10,
                width: 10,
                borderRadius: "50%",
                background: "red",
            }}
        />
    );
};
