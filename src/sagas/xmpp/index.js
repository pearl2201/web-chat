import { all } from 'redux-saga/effects';
import setupClient from './setupClient';
import auth from './auth';

function* runLoop(client) {
	let restarts = 0;

	while (true) {
		try {
			yield all(
				[
					//   bookmarks(client),
					//   clientSaga(client),
					//   files(client),
					//   forms(client),
					//   rooms(client),
					//   messages(client),
					//   presence(client),
					//   user(client),
					//   settings()
				]
			);
		} catch (e) {
			console.error('Caught error in saga, restarting:');
			console.error(e);
			restarts += 1;
			if (restarts > 10) {
				throw new Error('Already restarted 10 times');
			}
		}
	}
}

function* xmppSaga() {
	const client = setupClient();
	yield all([runLoop(client), auth(client)]);
}

export default xmppSaga;
