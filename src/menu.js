import React from "react";
import { Position } from "./position";
import "./style/menu.css";

export const Menu = (props) => {
    const { dishes, arr } = props;

    return (
        <div className="menu">
            <UnpackPositions arr={dishes} />
        </div>
    );
};

function UnpackPositions(props) {
    const positionsArr = props.arr;
    let listPositions = positionsArr.map((position, i) => {
        const { pictureUrl, name, description, weigh, price } = position;
        return (
            <Position
                key={i}
                id={position}
                link={pictureUrl}
                name={name}
                ingridients={description}
                weight={weigh}
                cost={price}
            />
        );
    });

    return listPositions;
}
