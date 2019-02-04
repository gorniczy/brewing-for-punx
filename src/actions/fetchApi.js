export function fetchError(bool) {
    return {
        type: 'FETCH_ERROR',
        error: bool
    };
}

export function fetchSuccess(data) {
    return {
        type: 'FETCH_SUCCESS',
        data
    };
}

export function fetchData(url) {
    return (dispatch) => {

        fetch(url)
            .then((response) => {

                return response;
            })
            .then((response) => response.json())
            .then((result) => dispatch(fetchSuccess(result)))
            .catch(() => dispatch(fetchError(true)));
    };
}
