import { GET_DATA, ADD_POSITION, REMOVE_POSITION } from "./action-types";
import { IDish } from "../types";

export function getData(id: string) {
    return {
        type: GET_DATA,
        id,
    };
}

export function addPosition(dish: IDish) {
    return {
        type: ADD_POSITION,
        dish,
    };
}

export function removePosition(dish: IDish) {
    return {
        type: REMOVE_POSITION,
        dish,
    };
}
