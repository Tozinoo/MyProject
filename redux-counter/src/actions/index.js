import * as types from "./ActionTypes";

export const increment = (index) => ({ type: types.INCREMENT });
export const decrement = (index) => ({ type: types.DECREMENT });
export const setColor = (index, color) => ({ type: types.SET_COLOR, color });

export const create = (color) => ({
    type: types.CREATE,
    color,
});

export const remove = () => ({
    type: types.REMOVE,
});
