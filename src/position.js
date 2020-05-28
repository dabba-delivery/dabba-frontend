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
        return (
            <div className="position">
                <div
                    className="position__image"
                    style={{
                        backgroundImage: this.props.link
                            ? `url(${this.props.link})`
                            : `url(./default.png)`,
                    }}
                ></div>
                <h5 className="position__name">{this.props.name}</h5>
                <p className="position__ingridients">
                    {this.props.ingridients}
                </p>
                <div className="position__wc">
                    <p className="position__weight">
                        {this.props.weight + "гр."}
                    </p>
                    <p className="position__cost">{this.props.cost + "р."}</p>
                </div>

                <Button
                    style={"orange"}
                    class={"position__button"}
                    func={() => {
                        window.cart && window.cart.addPos(this.props.id);
                    }}
                >
                    Выбрать
                </Button>
            </div>
        );
    }
}
