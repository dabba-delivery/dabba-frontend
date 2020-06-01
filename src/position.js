import React from "react";
import { Button } from "./components/library.js";
import "./style/position.css";

// В этому компоненту нужно передать через
// пропсы объект позиции и сразу назначить все
// напрямую в теги, так как делать стейт не имеет смысла
// позиция формируется только один раз

// пока не делал привязку изображения через css custom properties!

export default class Position extends React.Component {
    render() {
        const { name, link, ingridients, cost, id, weight } = this.props;

        return (
            <div className="position">
                <div
                    className="position__image"
                    style={{
                        backgroundImage: link
                            ? `url(${link})`
                            : `url(./default.png)`,
                    }}
                ></div>
                <h5 className="position__name">{name}</h5>
                <p className="position__ingridients">{ingridients}</p>
                <div className="position__wc">
                    <p className="position__weight">{weight + "гр."}</p>
                    <p className="position__cost">{cost + "р."}</p>
                </div>

                <Button
                    style="orange"
                    classNames="position__button"
                    onClick={() => {
                        window.cart && window.cart.addPos(id);
                    }}
                >
                    Выбрать
                </Button>
            </div>
        );
    }
}
