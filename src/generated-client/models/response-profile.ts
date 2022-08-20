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


import { DlnaProfileType } from './dlna-profile-type';
import { ProfileCondition } from './profile-condition';

/**
 * 
 * @export
 * @interface ResponseProfile
 */
export interface ResponseProfile {
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    Container?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    AudioCodec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    VideoCodec?: string | null;
    /**
     * 
     * @type {DlnaProfileType}
     * @memberof ResponseProfile
     */
    Type?: DlnaProfileType;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    OrgPn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    MimeType?: string | null;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof ResponseProfile
     */
    Conditions?: Array<ProfileCondition> | null;
}


