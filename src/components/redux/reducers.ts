import { addPosition, removePosition } from "./action-creators";
import { ADD_POSITION, REMOVE_POSITION } from "./action-types";
import { IDish } from "../types";

const initialState = {
    dishes: {},
};

interface IAction {
    type: string;
    dish: IDish;
}

function dabbaApp(state = initialState, action: IAction) {
    switch (action.type) {
        case ADD_POSITION:
            return { ...state, dishes: addDish(state.dishes, action.dish) };
        case REMOVE_POSITION:
            return { ...state, dishes: removeDish(state.dishes, action.dish) };
        default:
            return state;
    }
}

function addDish(dishes: any, dish: IDish) {
    dishes[JSON.stringify(dish)]
        ? dishes[JSON.stringify(dish)]++
        : (dishes[JSON.stringify(dish)] = 1);
    return dishes;
}

function removeDish(dishes: any, dish: IDish) {
    dishes[JSON.stringify(dish)] > 1
        ? dishes[JSON.stringify(dish)]--
        : delete dishes[JSON.stringify(dish)];

    return dishes;
}
