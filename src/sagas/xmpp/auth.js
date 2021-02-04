import { delay } from 'redux-saga';
import {
 take, put, call, spawn, race
} from 'redux-saga/effects';

import history from '../../history';

export default function* authSaga(client) {
    // const savedCreds = yield call(getSavedLogin);

    // yield call(tryConnect, client, savedCreds);

    // window.client = client;

    // yield spawn(logout, client);

    return client;
  }
