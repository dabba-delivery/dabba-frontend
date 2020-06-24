// React
import React from "react";

// Main commmponents
import Position from "./position";
// Components from library

// Context

// CSS
import "./style/menu.css";

/**
 * Menu - represents block menu without dishes
 *
 * @param {Object} props - provide dishes with the information inside
 * @return {Component} - return component with unpacked dishes
 */
export const Menu: React.FC<{ dishes: [] | undefined }> = (props) => {
    const { dishes = [] } = props;

    return (
        <div className="menu">
            {dishes.map((position, i) => {
                const {
                    pictureUrl,
                    name,
                    description,
                    weigh,
                    price,
                } = position;
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
            })}
        </div>
    );
};
