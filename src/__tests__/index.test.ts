import { Configuration } from '../generated-client';
import { Jellyfin } from '..';

// FIXME: These tests should be mocked and not calling an actual server
const SERVER_URL = 'https://demo.jellyfin.org/stable';

const TEST_CONFIGURATION = new Configuration({
	// basePath: 'http://localhost:8096'
	basePath: SERVER_URL
});

test('Test the BaseAPI constructor', () => {
	const jellyfin = new Jellyfin(TEST_CONFIGURATION);
	expect(jellyfin).not.toBeNull();

	expect(jellyfin.configuration.basePath).toEqual(SERVER_URL);
	expect(jellyfin.authorizationHeader).toEqual('MediaBrowser Client="jellyfin-sdk-typescript", Device="device-name", DeviceId="device-id", Version="v0.1.0", Token=""')
});

test('Test public users api', async () => {
	const jellyfin = new Jellyfin(TEST_CONFIGURATION);

	const users = await jellyfin.userApi.getPublicUsers();
	// console.log('Users =>', users.data);
	expect(users.data).toBeTruthy();
});

test('Test public system info api', async () => {
	const jellyfin = new Jellyfin(TEST_CONFIGURATION);

	const info = await jellyfin.systemApi.getPublicSystemInfo();
	// console.log('Info =>', info.data);
	expect(info.data).toBeTruthy();
});

test('Test user login api', async () => {
	const jellyfin = new Jellyfin(TEST_CONFIGURATION);

	const auth = await jellyfin.authenticateUserByName({ Username: 'demo', Pw: '' });
	// console.log('Auth =>', auth.data);
	expect(auth.data).toBeTruthy();
});
