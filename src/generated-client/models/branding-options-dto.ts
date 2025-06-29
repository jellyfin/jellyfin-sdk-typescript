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
 * The branding options DTO for API use.  This DTO excludes SplashscreenLocation to prevent it from being updated via API.
 * @export
 * @interface BrandingOptionsDto
 */
export interface BrandingOptionsDto {
    /**
     * Gets or sets the login disclaimer.
     * @type {string}
     * @memberof BrandingOptionsDto
     */
    'LoginDisclaimer'?: string | null;
    /**
     * Gets or sets the custom CSS.
     * @type {string}
     * @memberof BrandingOptionsDto
     */
    'CustomCss'?: string | null;
    /**
     * Gets or sets a value indicating whether to enable the splashscreen.
     * @type {boolean}
     * @memberof BrandingOptionsDto
     */
    'SplashscreenEnabled'?: boolean;
}

