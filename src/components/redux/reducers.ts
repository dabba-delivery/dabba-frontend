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

export function dabbaApp(state = initialState, action: IAction) {
    switch (action.type) {
        case ADD_POSITION:
            return {
                ...state,
                dishes: addDish(state.dishes, JSON.stringify(action.dish)),
            };
        case REMOVE_POSITION:
            return {
                ...state,
                dishes: removeDish(state.dishes, JSON.stringify(action.dish)),
            };
        default:
            return state;
    }
}

function addDish(dishes: any, dish: string) {
    dishes[dish] ? dishes[dish]++ : (dishes[dish] = 1);
    return dishes;
}

function removeDish(dishes: any, dish: string) {
    dishes[dish] > 1 ? dishes[dish]-- : delete dishes[dish];
    return dishes;
}
