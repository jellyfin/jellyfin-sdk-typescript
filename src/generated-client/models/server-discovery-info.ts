/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */



/**
 * The server discovery info model.
 * @export
 * @interface ServerDiscoveryInfo
 */
export interface ServerDiscoveryInfo {
    /**
     * Gets the address.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'Address'?: string;
    /**
     * Gets the server identifier.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'Id'?: string;
    /**
     * Gets the name.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'Name'?: string;
    /**
     * Gets the endpoint address.
     * @type {string}
     * @memberof ServerDiscoveryInfo
     */
    'EndpointAddress'?: string | null;
}

