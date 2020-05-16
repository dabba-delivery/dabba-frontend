import React from "react";
import "./map.css";

// this block will be recieving a position from parent component and
// put that in props of the map component
export default class MapBlock extends React.Component {
    render() {
        return (
            <div className="map">
                <div className="map__map">
                    {/* {place for your map-application} */}
                </div>
                <div className="map__form">
                    <p className="map__text-zone">
                        У этого заведения есть зона доставки, для заказа вы
                        должны находиться в ней
                    </p>
                    <button className="map__button-allow">
                        Разрешите доступ к вашему местоположению
                    </button>
                    <p className="map__text-adress">
                        или введите адрес доставки (улица и дом)
                    </p>
                    <input className="map__input-adress"></input>
                    <button className="map__button-ready">Готово</button>
                </div>
            </div>
        );
    }
}
