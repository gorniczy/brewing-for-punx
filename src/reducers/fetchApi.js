export function fetchError(state = false, action) {
    switch (action.type) {
        case 'FETCH_ERROR':
            return action.error;

        default:
            return state;
    }
}

export function data(state = [], action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.data;

        default:
            return state;
    }
}
