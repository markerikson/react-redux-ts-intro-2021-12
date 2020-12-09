// redux-thunk: dispatch a function, which is called
// and given dispatch and getState as parameters
function thunkActionCreator(someValue) {
    return (dispatch, getState) => {
        dispatch({type : "REQUEST_STARTED"});

        myAjaxLib.post("/someEndpoint", {data : someValue})
        .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}))
        .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));
    };
}

// redux-saga: uses ES6 generators to create pausable functions, which
// return descriptions of async work for the middleware to execute
function* sagaActionCreator(someValue) {
    yield put({type : "REQUEST_STARTED"});

    try {
        const response = yield call(myAjaxLib.post,
            "/someEndpoint", {data : someValue}
        );
        yield put({type : "REQUEST_SUCCEEDED", payload : response});
    }
    catch(error) {
        yield put({type : "REQUEST_FAILED", error : error});
    }
}