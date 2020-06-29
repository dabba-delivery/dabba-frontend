// React
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "./components/redux/action-creators";

// Main commmponents
import { MainPart } from "./mainPart";
import { Bin } from "./bin";
import { Finish } from "./finish";
import { IBinContext, IDish, IState, IStoreProps } from "./components/types";

// Components from library
import { Loader } from "./components";

// Types and Interfaces

// Context
import { BinContext } from "./context";

// CSS
import "./style/index.css";

/**
 * Component Restaurant represent main page at the application where users order food
 *
 * @param {props} props - includes:
 * @param {number} id - this parameter goes from React.Router and it's using for fetching data
 * @return {Component}
 */
export const Restaurant: React.FC<IStoreProps> = (props) => {
    const {
        match: {
            params: { id },
        },
        data,
        getData,
    } = props;

    const [finishForm, setFinishForm] = useState(false);
    const { items, addPosition, removePosition, countPositions } = useBin();

    useEffect(() => {
        getData(id);
    });

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
                                onClose={() => setFinishForm(!finishForm)}
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

export default connect(({ data }: IState) => ({ data }), { getData })(
    Restaurant
);

/**
 * useBin is custom hook which provide logic for the Bin
 * @return {Object}
 */
const useBin = (): IBinContext => {
    const [items, setBin] = useState(new Map<IDish, any>());

    /**
     * Adding new position in the cart
     * @param {Object} dish - contain all information about dishes
     */
    const addPosition = (dish: IDish) => {
        const map = new Map(items);
        map.has(dish) ? ++map.get(dish).val : map.set(dish, { val: 1 });
        setBin(new Map(map));
    };
    /**
     * Removing position from the cart
     * @param {Object} dish - contain all information about dishes
     */
    const removePosition = (dish: IDish) => {
        const map = new Map(items);
        items.has(dish) && --map.get(dish).val;
        map.get(dish).val <= 0 && map.delete(dish);
        setBin(new Map(map));
    };
    /**
     * Calculating the final sum
     * @return {number} - final sum
     */
    const countPositions = () => {
        let result = 0;

        items.forEach((item, key: IDish) => {
            result += item.val * key.price;
        });

        return result;
    };

    return {
        items,
        addPosition,
        removePosition,
        countPositions,
    };
};
