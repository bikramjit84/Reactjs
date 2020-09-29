import { takeEvery, call, put, fork } from 'redux-saga/effects';

import { addDeveloperBio } from '../api/developerAPI';
import devActions, { Types } from '../reducers/devReducers';

// Generator functions

// workers
function* addBio({developer}) {
    try {
        const result = yield call(addDeveloperBio, developer)
        console.log("result post :" + result)
       // yield put(devActions.addDeveloperBioCreator())
    }catch(errror) {
       // console.log("the error occured in addBio worker :"+ error)
    }
}

// watchers
function* watchAddDeveloper() {

    yield  takeEvery(Types.ADD_BIO, addBio);
}

const addDeveloperSagas = [
    fork(watchAddDeveloper)
];

export default addDeveloperSagas;