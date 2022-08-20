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


import { VersionInfo } from './version-info';

/**
 * Class PackageInfo.
 * @export
 * @interface PackageInfo
 */
export interface PackageInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof PackageInfo
     */
    name?: string;
    /**
     * Gets or sets a long description of the plugin containing features or helpful explanations.
     * @type {string}
     * @memberof PackageInfo
     */
    description?: string;
    /**
     * Gets or sets a short overview of what the plugin does.
     * @type {string}
     * @memberof PackageInfo
     */
    overview?: string;
    /**
     * Gets or sets the owner.
     * @type {string}
     * @memberof PackageInfo
     */
    owner?: string;
    /**
     * Gets or sets the category.
     * @type {string}
     * @memberof PackageInfo
     */
    category?: string;
    /**
     * Gets or sets the guid of the assembly associated with this plugin.  This is used to identify the proper item for automatic updates.
     * @type {string}
     * @memberof PackageInfo
     */
    guid?: string;
    /**
     * Gets or sets the versions.
     * @type {Array<VersionInfo>}
     * @memberof PackageInfo
     */
    versions?: Array<VersionInfo>;
    /**
     * Gets or sets the image url for the package.
     * @type {string}
     * @memberof PackageInfo
     */
    imageUrl?: string | null;
}


