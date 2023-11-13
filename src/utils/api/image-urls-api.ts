/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { ImageApiGetSplashscreenRequest } from '../../generated-client/api/image-api';
import { ImageApi } from '../../generated-client/api/image-api';
import type { BaseItemDto } from '../../generated-client/models/base-item-dto';
import { ImageType } from '../../generated-client/models/image-type';
import type { UserDto } from '../../generated-client/models/user-dto';
import type { ImageRequestParameters } from '../../models/api/image-request-parameters';

/**
 * ImageUrlsApi - ImageApi with URL utility methods
 * @export
 * @class ImageUrlsApi
 * @extends {ImageApi}
 */
export class ImageUrlsApi extends ImageApi {
	/**
	 * Get an Item image URL for a given Item ID.
	 * @param itemId The Item ID.
	 * @param [imageType=ImageType.Primary] An optional Image Type.
	 * @param [params={}] Additional request parameters.
	 * @returns The image URL.
	 */
	public getItemImageUrlById(
		itemId: string,
		imageType: ImageType = ImageType.Primary,
		params: ImageRequestParameters = {}
	): string {
	// TODO: We could probably use ImageApiAxiosParamCreator to make this more robust
		return this.axios.getUri({
			baseURL: this.configuration?.basePath,
			url: `/Items/${itemId}/Images/${imageType}`,
			params
		});
	}

	/**
	 * Get an Item image URL with automatic `tag` param handling.
	 * @param item The Item.
	 * @param [imageType] An optional Image Type (Primary by default).
	 * @param [params={}] Additional request parameters.
	 * @returns The Item image URL.
	 */
	public getItemImageUrl(item?: BaseItemDto, imageType: ImageType = ImageType.Primary, params: ImageRequestParameters = {}): string | undefined {
		if (!item?.Id) return;

		return this.getItemImageUrlById(
			item.Id,
			imageType,
			{
				...params,
				tag: params.tag ?? item.ImageTags?.[imageType]
			}
		);
	}

	/**
	 * Get an Item's backdrop image URLs.
	 * @param item The Item.
	 * @param [params={}] Additional request parameters.
	 * @returns An array of backdrop image URLs.
	 */
	public getItemBackdropImageUrls(item?: BaseItemDto, params: ImageRequestParameters = {}): string[] {
		const urls: string[] = [];
		const id = item?.Id;

		if (!id) return urls;

		item.BackdropImageTags?.forEach(tag => {
			const url = this.getItemImageUrlById(
				id,
				ImageType.Backdrop,
				{
					...params,
					tag
				}
			);

			urls.push(url);
		});

		if (urls.length > 0) return urls;

		const parentId = item.ParentBackdropItemId;
		if (parentId) {
			item.ParentBackdropImageTags?.forEach(tag => {
				const url = this.getItemImageUrlById(
					parentId,
					ImageType.Backdrop,
					{
						...params,
						tag
					}
				);

				urls.push(url);
			});
		}

		return urls;
	}

	/**
	 * Get the splash screen image URL.
	 * @param [params={}] Additional request parameters.
	 * @returns The splash screen image URL.
	 */
	public getSplashscreenImageUrl(params: ImageApiGetSplashscreenRequest = {}): string {
		return this.axios.getUri({
			baseURL: this.configuration?.basePath,
			url: '/Branding/Splashscreen',
			params
		});
	}

	/**
	 * Get a User's primary image URL.
	 * @param user The User.
	 * @param [params={}] Additional request parameters.
	 * @returns The User's primary image URL.
	 */
	public getUserImageUrl(user?: UserDto, params: ImageRequestParameters = {}): string | undefined {
		if (!user?.Id) return;

		return this.axios.getUri({
			baseURL: this.configuration?.basePath,
			url: `/Users/${user.Id}/Images/Primary`,
			params: {
				...params,
				tag: user.PrimaryImageTag
			}
		});
	}
}
