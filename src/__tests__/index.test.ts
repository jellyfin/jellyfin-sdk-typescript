import { Configuration, UserApi } from '../generated-client';
import { BaseAPI } from '../generated-client/base';

const TEST_CONFIGURATION = new Configuration({
	basePath: 'http://localhost:8096'
});

test('Test the BaseAPI constructor', () => {
	const api = new BaseAPI(TEST_CONFIGURATION);
	expect(api).not.toBeNull();
});

test('Test public users api', async () => {
	const api = new UserApi(TEST_CONFIGURATION);
	expect(api).not.toBeNull();
	expect(await api.getPublicUsers()).not.toBeNull();
});
