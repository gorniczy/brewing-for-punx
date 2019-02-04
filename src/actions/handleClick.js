export function ifAdult(age) {
    return {
        type: 'IF_ADULT',
        ifAdult: age >=18
    };
}

export function showDetails(bool) {
    return {
        type: 'SHOW_DETAILS',
        showDetails: bool
    };
}

export function captureIndex(num) {
    return {
        type: 'CAPTURE_INDEX',
        captureIndex: num
    };
}

export function showBeers(bool) {
    return {
        type: 'SHOW_BEERS',
        showBeers: bool
    };
}
