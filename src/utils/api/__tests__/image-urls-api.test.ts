/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Configuration } from '../../../generated-client/configuration';
import { ImageType } from '../../../generated-client/models/image-type';
import { ImageUrlsApi } from '../image-urls-api';

const IMAGE_API = new ImageUrlsApi(new Configuration({ basePath: 'https://example.com' }));

/**
 * ImageUrlsApi class tests.
 *
 * @group unit
 */
describe('ImageUrlsApi', () => {
	it('`getItemImageUrlById` should return an item image url', () => {
		// Id only
		expect(IMAGE_API.getItemImageUrlById('TEST')).toBe('https://example.com/Items/TEST/Images/Primary');
		// Id, ImageType, and Params
		expect(IMAGE_API.getItemImageUrlById('TEST', ImageType.Backdrop, { fillWidth: 100, fillHeight: 100 }))
			.toBe('https://example.com/Items/TEST/Images/Backdrop?fillWidth=100&fillHeight=100');
	});

	it('`getItemImageUrl` should return an item image url', () => {
		// Empty item
		expect(IMAGE_API.getItemImageUrl()).toBeUndefined();
		expect(IMAGE_API.getItemImageUrl({})).toBeUndefined();
		// Item with Id only
		expect(IMAGE_API.getItemImageUrl({ Id: 'TEST' })).toBe('https://example.com/Items/TEST/Images/Primary');
		// Item with Id and Tag
		expect(IMAGE_API.getItemImageUrl({ Id: 'TEST', ImageTags: { [ImageType.Primary]: 'foo' } }))
			.toBe('https://example.com/Items/TEST/Images/Primary?tag=foo');
		// Item with Id, ImageType, and Params
		expect(IMAGE_API.getItemImageUrl(
			{ Id: 'TEST' },
			ImageType.Backdrop,
			{ fillWidth: 100, fillHeight: 100, tag: 'foo' })
		).toBe('https://example.com/Items/TEST/Images/Backdrop?fillWidth=100&fillHeight=100&tag=foo');
	});

	it('`getItemBackdropImageUrls` should return an array of image urls', () => {
		// No Item
		expect(IMAGE_API.getItemBackdropImageUrls()).toHaveLength(0);
		// Item with Id only
		expect(IMAGE_API.getItemBackdropImageUrls({ Id: 'TEST' })).toHaveLength(0);
		// Item with Id and ParentBackdropItemId
		expect(IMAGE_API.getItemBackdropImageUrls({
			Id: 'TEST',
			ParentBackdropItemId: 'PARENT'
		})).toHaveLength(0);
		// Item with Id and BackdropImageTags
		let backdropUrls = IMAGE_API.getItemBackdropImageUrls({
			Id: 'TEST',
			BackdropImageTags: [ 'tag1', 'tag2' ]
		});
		expect(backdropUrls).toHaveLength(2);
		expect(backdropUrls[0]).toBe('https://example.com/Items/TEST/Images/Backdrop?tag=tag1');
		expect(backdropUrls[1]).toBe('https://example.com/Items/TEST/Images/Backdrop?tag=tag2');
		// TODO: Item with Id, ParentBackdropItemId, and ParentBackdropImageTags
		backdropUrls = IMAGE_API.getItemBackdropImageUrls({
			Id: 'TEST',
			ParentBackdropItemId: 'PARENT',
			ParentBackdropImageTags: [ 'parent1', 'parent2', 'parent3' ]
		});
		expect(backdropUrls).toHaveLength(3);
		expect(backdropUrls[0]).toBe('https://example.com/Items/PARENT/Images/Backdrop?tag=parent1');
		expect(backdropUrls[1]).toBe('https://example.com/Items/PARENT/Images/Backdrop?tag=parent2');
		expect(backdropUrls[1]).toBe('https://example.com/Items/PARENT/Images/Backdrop?tag=parent2');
	});

	it('`getSplashscreenImageUrl` should return an image url', () => {
		// No Params
		expect(IMAGE_API.getSplashscreenImageUrl()).toBe('https://example.com/Branding/Splashscreen');
		// Params
		expect(IMAGE_API.getSplashscreenImageUrl({ fillWidth: 100, fillHeight: 100 }))
			.toBe('https://example.com/Branding/Splashscreen?fillWidth=100&fillHeight=100');
	});

	it('`getUserImageUrl` should return a user image url', () => {
		// No User
		expect(IMAGE_API.getUserImageUrl()).toBeUndefined();
		// User with Id
		expect(IMAGE_API.getUserImageUrl({ Id: 'TEST' })).toBe('https://example.com/Users/TEST/Images/Primary');
		// User with Id and Tag
		expect(IMAGE_API.getUserImageUrl({ Id: 'TEST', PrimaryImageTag: 'foo' }))
			.toBe('https://example.com/Users/TEST/Images/Primary?tag=foo');
		// User with Id and Tag and Params
		expect(IMAGE_API.getUserImageUrl({ Id: 'TEST', PrimaryImageTag: 'foo' }, { fillWidth: 100, fillHeight: 100 }))
			.toBe('https://example.com/Users/TEST/Images/Primary?fillWidth=100&fillHeight=100&tag=foo');
	});

	it('should return relative paths when no basePath is configured', () => {
		const relativeImageApi = new ImageUrlsApi();
		// getItemImageUrlById
		expect(relativeImageApi.getItemImageUrlById('TEST')).toBe('/Items/TEST/Images/Primary');
		// getItemImageUrl
		expect(relativeImageApi.getItemImageUrl({ Id: 'TEST' })).toBe('/Items/TEST/Images/Primary');
		// getItemBackdropImageUrls
		const backdropUrls = relativeImageApi.getItemBackdropImageUrls({
			Id: 'TEST',
			BackdropImageTags: [ 'tag1', 'tag2' ]
		});
		expect(backdropUrls).toHaveLength(2);
		expect(backdropUrls[0]).toBe('/Items/TEST/Images/Backdrop?tag=tag1');
		expect(backdropUrls[1]).toBe('/Items/TEST/Images/Backdrop?tag=tag2');
		// getSplashscreenImageUrl
		expect(relativeImageApi.getSplashscreenImageUrl()).toBe('/Branding/Splashscreen');
		// getUserImageUrl
		expect(relativeImageApi.getUserImageUrl({ Id: 'TEST' })).toBe('/Users/TEST/Images/Primary');
	});
});
