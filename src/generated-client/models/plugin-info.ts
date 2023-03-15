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


// May contain unused imports in some cases
// @ts-ignore
import { PluginStatus } from './plugin-status.js';

/**
 * This is a serializable stub class that is used by the api to provide information about installed plugins.
 * @export
 * @interface PluginInfo
 */
export interface PluginInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof PluginInfo
     */
    'Name'?: string;
    /**
     * Gets or sets the version.
     * @type {string}
     * @memberof PluginInfo
     */
    'Version'?: string;
    /**
     * Gets or sets the name of the configuration file.
     * @type {string}
     * @memberof PluginInfo
     */
    'ConfigurationFileName'?: string | null;
    /**
     * Gets or sets the description.
     * @type {string}
     * @memberof PluginInfo
     */
    'Description'?: string;
    /**
     * Gets or sets the unique id.
     * @type {string}
     * @memberof PluginInfo
     */
    'Id'?: string;
    /**
     * Gets or sets a value indicating whether the plugin can be uninstalled.
     * @type {boolean}
     * @memberof PluginInfo
     */
    'CanUninstall'?: boolean;
    /**
     * Gets or sets a value indicating whether this plugin has a valid image.
     * @type {boolean}
     * @memberof PluginInfo
     */
    'HasImage'?: boolean;
    /**
     * 
     * @type {PluginStatus}
     * @memberof PluginInfo
     */
    'Status'?: PluginStatus;
}

