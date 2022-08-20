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


import { DeviceInfo } from './device-info';

/**
 * 
 * @export
 * @interface DeviceInfoQueryResult
 */
export interface DeviceInfoQueryResult {
    /**
     * Gets or sets the items.
     * @type {Array<DeviceInfo>}
     * @memberof DeviceInfoQueryResult
     */
    Items?: Array<DeviceInfo> | null;
    /**
     * Gets or sets the total number of records available.
     * @type {number}
     * @memberof DeviceInfoQueryResult
     */
    TotalRecordCount?: number;
    /**
     * Gets or sets the index of the first record in Items.
     * @type {number}
     * @memberof DeviceInfoQueryResult
     */
    StartIndex?: number;
}


