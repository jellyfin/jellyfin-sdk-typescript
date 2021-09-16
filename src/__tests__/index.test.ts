import { Configuration, Jellyfin } from '..';

// FIXME: These tests should be mocked and not calling an actual server
const SERVER_URL = 'https://demo.jellyfin.org/stable';

const TEST_CONFIGURATION = new Configuration({
	// basePath: 'http://localhost:8096'
	basePath: SERVER_URL
});

describe('Test the Base SDK', () => {
	it('create an api instance', () => {
		const jellyfin = new Jellyfin();
		expect(jellyfin).not.toBeNull();

		const api = jellyfin.createApi(TEST_CONFIGURATION);
		expect(api.configuration.basePath).toEqual(SERVER_URL);
		expect(api.authorizationHeader).toEqual('MediaBrowser Client="jellyfin-sdk-typescript", Device="device-name", DeviceId="device-id", Version="v0.1.0", Token=""');
	});

	it('public users api', async () => {
		const jellyfin = new Jellyfin();
		const api = jellyfin.createApi(TEST_CONFIGURATION);

		const users = await api.userApi.getPublicUsers();
		// console.log('Users =>', users.data);
		expect(users.data).toBeTruthy();
	});

	it('public system info api', async () => {
		const jellyfin = new Jellyfin();
		const api = jellyfin.createApi(TEST_CONFIGURATION);

		const info = await api.systemApi.getPublicSystemInfo();
		// console.log('Info =>', info.data);
		expect(info.data).toBeTruthy();
	});

	it('user login api', async () => {
		const jellyfin = new Jellyfin();
		const api = jellyfin.createApi(TEST_CONFIGURATION);

		const auth = await api.authenticateUserByName({ Username: 'demo', Pw: '' });
		// console.log('Auth =>', auth.data);
		expect(auth.data).toBeTruthy();
	});

	it('library api', async () => {
		const jellyfin = new Jellyfin();
		const api = jellyfin.createApi(TEST_CONFIGURATION);

		await api.authenticateUserByName({ Username: 'demo', Pw: '' });

		const libraries = await api.libraryApi.getMediaFolders();
		// console.log('Libraries =>', libraries.data);
		expect(libraries.data).toBeTruthy();
	});
});
