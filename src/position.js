import React from "react";
import "./position.css";

// В этому компоненту нужно передать через
// пропсы объект позиции и сразу назначить все
// напрямую в теги, так как делать стейт не имеет смысла
// позиция формируется только один раз

// пока не делал привязку изображения через css custom properties!

export default class Position extends React.Component {
    render() {
        return (
            <div className="position">
                <div className="position__image"></div>
                <h5 className="position__name">{this.props.name}</h5>
                <p className="position__ingridients">
                    {this.props.ingridients}
                </p>
                <div className="position__wc">
                    <p className="postion__weight">{this.props.weight}</p>
                    <p className="position__cost">{this.props.cost}</p>
                </div>
                <button className="position__button">Выбрать</button>
            </div>
        );
    }
}
