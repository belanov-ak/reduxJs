import { CHANGE_THEME, DECREMENT, INCREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types";

export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

function disableButtons() {
    return {
        type: DISABLE_BUTTONS
    }
}

function enableButtons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function asyncIncrement() {
    return function(dispatch) {
        dispatch(disableButtons())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableButtons())
        }, 1500)
    }
}