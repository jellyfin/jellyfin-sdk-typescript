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
import { ForgotPasswordAction } from './forgot-password-action.js';

/**
 * 
 * @export
 * @interface ForgotPasswordResult
 */
export interface ForgotPasswordResult {
    /**
     * 
     * @type {ForgotPasswordAction}
     * @memberof ForgotPasswordResult
     */
    'Action'?: ForgotPasswordAction;
    /**
     * Gets or sets the pin file.
     * @type {string}
     * @memberof ForgotPasswordResult
     */
    'PinFile'?: string | null;
    /**
     * Gets or sets the pin expiration date.
     * @type {string}
     * @memberof ForgotPasswordResult
     */
    'PinExpirationDate'?: string | null;
}

