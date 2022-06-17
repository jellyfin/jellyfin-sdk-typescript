/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { DeviceProfile } from '../generated-client/models/device-profile';
import { SubtitleDeliveryMethod } from '../generated-client/models/subtitle-delivery-method';
import { SubtitleProfile } from '../generated-client/models/subtitle-profile';

/**
 * Options parameters to build profiles
 * @export
 * @interface DeviceProfileGeneratorOptions
 */
export interface DeviceProfileGeneratorOptions {
  /**
   * Deliver SSA subtitles externally instead of requiring a burn in
   */
  ssaExternal?: boolean;
}

/**
 * Generates a list of subtitle profiles
 * @param {HTMLVideoElement} videoElement - HTML video element to test again
 * @param {DeviceProfileGeneratorOptions} options - Options to pass to the subtitle generator
 * @returns List of subtitle profiles
 */
const getBrowserSubtitleProfiles = (videoElement: HTMLVideoElement, options?: DeviceProfileGeneratorOptions): SubtitleProfile[] => {
	const subtitleProfiles: SubtitleProfile[] = [];

	if (videoElement.textTracks !== null) {
		subtitleProfiles.push({ Format: 'vtt', Method: SubtitleDeliveryMethod.External });
	}

	if (options?.ssaExternal) {
		subtitleProfiles.push(
			{ Format: 'ssa', Method: SubtitleDeliveryMethod.External },
			{ Format: 'ass', Method: SubtitleDeliveryMethod.External }
		);
	} else {
		subtitleProfiles.push(
			{ Format: 'ssa', Method: SubtitleDeliveryMethod.Encode },
			{ Format: 'ass', Method: SubtitleDeliveryMethod.Encode }
		);
	}

	return subtitleProfiles;
};

/**
 * Generates a device profile based on a few options and the current browser capabilites
 * @exports
 * @param {DeviceProfileGeneratorOptions} options - Options to pass to the different profiles generators
 * @param {HTMLVideoElement} videoElement - Optionnal HTML video element to use, else it'll create one
 * @returns A detected device profile
 */
export const getBrowserDeviceProfile = (options?: DeviceProfileGeneratorOptions, videoElement?: HTMLVideoElement): DeviceProfile => {
	const deviceProfile: DeviceProfile = {};
	if (!videoElement) {
		videoElement = document.createElement('video');
	}

	deviceProfile.SubtitleProfiles = getBrowserSubtitleProfiles(videoElement, options);

	return deviceProfile;
};
