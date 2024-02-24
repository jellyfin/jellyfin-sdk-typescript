/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { describe, it, expect } from 'vitest';

import { getBrowserDeviceProfile } from '..';
import { SubtitleDeliveryMethod } from '../../generated-client';

const MOCK_VIDEO_ELEMENT = {
	textTracks: []
} as unknown as HTMLVideoElement;

/**
 * Browser subtitle profiles tests
 *
 * @group unit/utils
 */
describe('Browser Subtitle Profiles', () => {
	it('should encode SSA subs by default', () => {
		const profile = getBrowserDeviceProfile(undefined, MOCK_VIDEO_ELEMENT);
		expect(profile.SubtitleProfiles).toContainEqual({
			Format: 'ssa',
			Method: SubtitleDeliveryMethod.Encode
		});
		expect(profile.SubtitleProfiles).toContainEqual({
			Format: 'ass',
			Method: SubtitleDeliveryMethod.Encode
		});
	});

	it('should delivers SSA subs if asked', () => {
		const profile = getBrowserDeviceProfile({ ssaExternal: true }, MOCK_VIDEO_ELEMENT);
		expect(profile.SubtitleProfiles).toContainEqual({
			Format: 'ssa',
			Method: SubtitleDeliveryMethod.External
		});
		expect(profile.SubtitleProfiles).toContainEqual({
			Format: 'ass',
			Method: SubtitleDeliveryMethod.External
		});
	});

	it('should provide VTT support if tracks element is present', () => {
		const profile = getBrowserDeviceProfile(undefined, MOCK_VIDEO_ELEMENT);
		expect(profile.SubtitleProfiles).toContainEqual({
			Format: 'vtt',
			Method: SubtitleDeliveryMethod.External
		});
	});
});
