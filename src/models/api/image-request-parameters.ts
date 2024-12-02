/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { ImageFormat } from '../../generated-client/models/image-format';

/**
 * Interface representing supported request parameters for the getItemImage API.
 * (May also work for other image APIs)
 */
export interface ImageRequestParameters {
	maxWidth?: number,
	maxHeight?: number,
	width?: number,
	height?: number,
	quality?: number,
	fillWidth?: number,
	fillHeight?: number,
	tag?: string,
	cropWhitespace?: boolean,
	format?: ImageFormat,
	percentPlayed?: number,
	unplayedCount?: number,
	blur?: number,
	backgroundColor?: string,
	foregroundLayer?: string,
	imageIndex?: number
}
