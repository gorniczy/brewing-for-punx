export function captureAge(state = null, action) {
    switch (action.type) {
        case 'CAPTUR_AGE':
            return action.captureAge;
        default:
            return state;
    }
}
