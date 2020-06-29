import { GET_DATA } from "./action-types";
import { IAction } from "../types";

import { restaurants } from "./dbexample";

const initialState = {
    data: restaurants.dodo,
    dishes: {},
};

export function dabbaApp(state = initialState, action: IAction) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: restaurants[action.id],
            };
        default:
            return state;
    }
}

