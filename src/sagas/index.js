import { all } from "redux-saga/effects";
import addDeveloperSagas from "./addDeveloperSaga";

import  developerSagas from './devSagas';

export default function* rootSaga() {
    yield all([
        ...developerSagas,...addDeveloperSagas
    ]);
}