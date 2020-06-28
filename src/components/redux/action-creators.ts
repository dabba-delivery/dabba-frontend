import { ADD_POSITION, REMOVE_POSITION } from "./action-types";
import { IDish } from "../types";

function addPosition(dish: IDish) {
    return {
        type: ADD_POSITION,
        dish,
    };
}

function removePosition(dish: IDish) {
    return {
        type: REMOVE_POSITION,
        dish,
    };
}
