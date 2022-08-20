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
 * Class ImageProviderInfo.
 * @export
 * @interface ImageProviderInfo
 */
export interface ImageProviderInfo {
    /**
     * Gets the name.
     * @type {string}
     * @memberof ImageProviderInfo
     */
    Name?: string;
    /**
     * Gets the supported image types.
     * @type {Array<ImageType>}
     * @memberof ImageProviderInfo
     */
    SupportedImages?: Array<ImageType>;
}


