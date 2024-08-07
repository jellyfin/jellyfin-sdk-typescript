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
import type { SessionMessageType } from './session-message-type';

/**
 * Restart required.
 * @export
 * @interface RestartRequiredMessage
 */
export interface RestartRequiredMessage {
    /**
     * Gets or sets the message id.
     * @type {string}
     * @memberof RestartRequiredMessage
     */
    'MessageId'?: string;
    /**
     * 
     * @type {SessionMessageType}
     * @memberof RestartRequiredMessage
     */
    'MessageType'?: SessionMessageType;
}



