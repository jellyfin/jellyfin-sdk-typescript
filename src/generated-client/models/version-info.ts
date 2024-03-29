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
 * Defines the MediaBrowser.Model.Updates.VersionInfo class.
 * @export
 * @interface VersionInfo
 */
export interface VersionInfo {
    /**
     * Gets or sets the version.
     * @type {string}
     * @memberof VersionInfo
     */
    'version'?: string;
    /**
     * Gets the version as a System.Version.
     * @type {string}
     * @memberof VersionInfo
     */
    'VersionNumber'?: string;
    /**
     * Gets or sets the changelog for this version.
     * @type {string}
     * @memberof VersionInfo
     */
    'changelog'?: string | null;
    /**
     * Gets or sets the ABI that this version was built against.
     * @type {string}
     * @memberof VersionInfo
     */
    'targetAbi'?: string | null;
    /**
     * Gets or sets the source URL.
     * @type {string}
     * @memberof VersionInfo
     */
    'sourceUrl'?: string | null;
    /**
     * Gets or sets a checksum for the binary.
     * @type {string}
     * @memberof VersionInfo
     */
    'checksum'?: string | null;
    /**
     * Gets or sets a timestamp of when the binary was built.
     * @type {string}
     * @memberof VersionInfo
     */
    'timestamp'?: string | null;
    /**
     * Gets or sets the repository name.
     * @type {string}
     * @memberof VersionInfo
     */
    'repositoryName'?: string;
    /**
     * Gets or sets the repository url.
     * @type {string}
     * @memberof VersionInfo
     */
    'repositoryUrl'?: string;
}

