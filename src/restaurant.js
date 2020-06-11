// React
import React, { useState, useEffect } from "react";

// Main commmponents
import { MainPart } from "./mainPart";
import { Bin } from "./bin.js";
import { Finish } from "./finish";

// Components from library
import { Loader } from "./components";

// Context
import { BinContext } from "./context";

// CSS
import "./style/index.css";
// DATA FOR DEV
import { restaurants } from "./dbexample";

/**
 * Component Restaurant represent main page at the application where users order food
 *
 * @param {props} props - includes:
 * @param {number} id - this parameter goes from React.Router and it's using for fetching data
 * @return {Component}
 */
export const Restaurant = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    const [data, setData] = useState("");
    const [finishForm, setFinishForm] = useState(false);
    const { items, addPosition, removePosition, countPositions } = useBin();

    useEffect(() => {
        getData(id);
    }, [id]);

    /**
     * getData returns user data
     *
     * @param {string} link - using for fetching data, provided by React Router
     */
    const getData = async (link) => {
        setData(restaurants[id]);

        // const result = await fetch(
        //     `https://dabba-ru.herokuapp.com/restaurant/find/${link}`
        // );

        // if (result.ok) {
        //     const json = await result.json();
        //     setData(json);
        // } else {
        //     alert("Ошибка HTTP: " + result.status);
        // }
    };

    return (
        <BinContext.Provider
            value={{
                items,
                addPosition,
                removePosition,
                countPositions,
            }}
        >
            <>
                {data ? (
                    <div className="page app-appear">
                        {finishForm ? (
                            <Finish
                                closeFunction={() => setFinishForm(!finishForm)}
                                finalCost={countPositions()}
                            />
                        ) : (
                            ""
                        )}

                        <MainPart data={data} />
                        <Bin finishFunc={() => setFinishForm(!finishForm)} />
                    </div>
                ) : (
                    <div className="page">
                        <Loader />
                    </div>
                )}
            </>
        </BinContext.Provider>
    );
};

/**
 * useBin is custom hook which provide logic for the Bin
 * @return {Object}
 */
const useBin = () => {
    const [items, setBin] = useState(new Map());

    /**
     * Adding new position in the cart
     * @param {Object} id - contain all information about dishes
     */
    const addPosition = (id) => {
        const map = new Map(items);
        map.has(id) ? ++map.get(id).val : map.set(id, { val: 1 });
        setBin(new Map(map));
    };
    /**
     * Removing position from the cart
     * @param {Object} id - contain all information about dishes
     */
    const removePosition = (id) => {
        const map = new Map(items);
        items.has(id) && --map.get(id).val;
        map.get(id).val <= 0 && map.delete(id);
        setBin(new Map(map));
    };
    /**
     * Calculating the final sum
     * @return {number} - final sum
     */
    const countPositions = () => {
        let result = 0;
        for (const item of items.entries()) {
            result += item[0].price * item[1].val;
        }
        return result;
    };

    return {
        items,
        addPosition,
        removePosition,
        countPositions,
    };
};
