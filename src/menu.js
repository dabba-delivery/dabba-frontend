import React from "react";
import Position from "./position";
import "./menu.css";

// компонент Menu принимает в себя массив объектов блюд следующего формата
// и автоматически распаковывает его

// let arr = [
//     {
//         name: "Пицца Маргарита",
//         pictureUrl: "string",
//         weigh: 1000,
//         price: 1000,
//         description:
//             "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
//         comments: "string",
//     },
// ];

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <UnpackPositions arr={this.props.dishes} />
            </div>
        );
    }
}

function UnpackPositions(props) {
    const positionsArr = props.arr;
    let listPositions = positionsArr.map((position, i) => {
        return (
            <Position
                key={i}
                id={position}
                link={position.pictureUrl}
                name={position.name}
                ingridients={position.description}
                weight={position.weigh}
                cost={position.price}
            />
        );
    });

    return listPositions;
}
