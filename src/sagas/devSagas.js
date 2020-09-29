import { takeEvery, call, put, fork } from 'redux-saga/effects';

import { addDeveloperBio, getDeveloperBios } from '../api/developerAPI';
import devActions, { Types } from '../reducers/devReducers';

// Generator functions

// workers
function* getBios() {
    try {
        const developers = yield call(getDeveloperBios)
        yield put(devActions.getAllBiosSuccessActionCreator(developers))
    }catch(errror) {
        //console.log("the error occured in worker :"+ error)
    }
}

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

// watchers
function* watchGetAllBiosRequest() {

    yield  takeEvery(Types.GET_ALL_BIOS_REQUEST, getBios);
}

const developerSagas = [
    fork(watchGetAllBiosRequest),
   // fork(watchAddDeveloper)
];

export default developerSagas;