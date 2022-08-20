/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ImageType } from './image-type';

/**
 * Class ImageInfo.
 * @export
 * @interface ImageInfo
 */
export interface ImageInfo {
    /**
     * 
     * @type {ImageType}
     * @memberof ImageInfo
     */
    ImageType?: ImageType;
    /**
     * Gets or sets the index of the image.
     * @type {number}
     * @memberof ImageInfo
     */
    ImageIndex?: number | null;
    /**
     * Gets or sets the image tag.
     * @type {string}
     * @memberof ImageInfo
     */
    ImageTag?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof ImageInfo
     */
    Path?: string | null;
    /**
     * Gets or sets the blurhash.
     * @type {string}
     * @memberof ImageInfo
     */
    BlurHash?: string | null;
    /**
     * Gets or sets the height.
     * @type {number}
     * @memberof ImageInfo
     */
    Height?: number | null;
    /**
     * Gets or sets the width.
     * @type {number}
     * @memberof ImageInfo
     */
    Width?: number | null;
    /**
     * Gets or sets the size.
     * @type {number}
     * @memberof ImageInfo
     */
    Size?: number;
}


