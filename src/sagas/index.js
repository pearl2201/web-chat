import { spawn } from 'redux-saga/effects';

import xmpp from './xmpp/index';

function* rootSaga() {
	yield spawn(xmpp);
}

export default rootSaga;
