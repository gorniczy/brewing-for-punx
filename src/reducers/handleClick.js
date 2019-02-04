export function ifAdult(state = null, action) {
    switch (action.type) {
        case 'IF_ADULT':
            return action.ifAdult;
        default:
            return state;
    }
}

export function showDetails(state = false, action) {
    switch (action.type) {
        case 'SHOW_DETAILS':
            return action.showDetails;
        default:
            return state;
    }
}

export function captureIndex(state = null, action) {
    switch (action.type) {
        case 'CAPTURE_INDEX':
            return action.captureIndex;
        default:
            return state;
    }
}

export function showBeers(state = false, action) {
    switch (action.type) {
        case 'SHOW_BEERS':
            return action.showBeers;
        default:
            return state;
    }
}
