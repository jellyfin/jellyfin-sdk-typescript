/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '..';
import { ActivityLogApi, ApiKeyApi, ArtistsApi, AudioApi, BrandingApi, ChannelsApi, CollectionApi, ConfigurationApi, DashboardApi, DevicesApi, DisplayPreferencesApi, DlnaApi, DlnaServerApi, DynamicHlsApi, EnvironmentApi, FilterApi, GenresApi, HlsSegmentApi } from '../generated-client';

describe('Api', () => {
	it('should return api instances', () => {
		const api = new Api(
			'http://example.com',
			{
				name: 'Api Test',
				version: '1.0.0'
			},
			{
				name: 'Test Device',
				id: 'test-id'
			}
		);

		expect(api.activityLogApi).toBeInstanceOf(ActivityLogApi);
		expect(api.apiKeyApi).toBeInstanceOf(ApiKeyApi);
		expect(api.artistsApi).toBeInstanceOf(ArtistsApi);
		expect(api.audioApi).toBeInstanceOf(AudioApi);
		expect(api.brandingApi).toBeInstanceOf(BrandingApi);
		expect(api.channelsApi).toBeInstanceOf(ChannelsApi);
		expect(api.collectionApi).toBeInstanceOf(CollectionApi);
		expect(api.configurationApi).toBeInstanceOf(ConfigurationApi);
		expect(api.dashboardApi).toBeInstanceOf(DashboardApi);
		expect(api.devicesApi).toBeInstanceOf(DevicesApi);
		expect(api.displayPreferencesApi).toBeInstanceOf(DisplayPreferencesApi);
		expect(api.dlnaApi).toBeInstanceOf(DlnaApi);
		expect(api.dlnaServerApi).toBeInstanceOf(DlnaServerApi);
		expect(api.dynamicHlsApi).toBeInstanceOf(DynamicHlsApi);
		expect(api.environmentApi).toBeInstanceOf(EnvironmentApi);
		expect(api.filterApi).toBeInstanceOf(FilterApi);
		expect(api.genresApi).toBeInstanceOf(GenresApi);
		expect(api.hlsSegmentApi).toBeInstanceOf(HlsSegmentApi);
	});
});
