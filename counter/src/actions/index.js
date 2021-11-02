import * as types from "./ActionTypes";

export const increment = (index) => ({
    type: types.INCREMENT,
    index,
});
export const decrement = (index) => ({
    type: types.DECREMENT,
    index,
});

export const setColor = (color) => ({
    type: types.SET_COLOR,
    color,
});
