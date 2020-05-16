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
                <h5 className="position__name">Пицца Маргарита</h5>
                <p className="position__ingridients">
                    Картофель из печи, соленые огурчики, цыпленок, соус ранч,
                    томаты, красный лук, чеснок, моцарелла, томатный соус
                </p>
                <div className="position__wc">
                    <p className="postion__weight">500гр</p>
                    <p className="position__cost">650гр</p>
                </div>
                <button className="position__button">Выбрать</button>
            </div>
        );
    }
}