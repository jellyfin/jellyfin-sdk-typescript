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



/**
 * The update user easy password request body.
 * @export
 * @interface UpdateUserEasyPassword
 */
export interface UpdateUserEasyPassword {
    /**
     * Gets or sets the new sha1-hashed password.
     * @type {string}
     * @memberof UpdateUserEasyPassword
     */
    NewPassword?: string | null;
    /**
     * Gets or sets the new password.
     * @type {string}
     * @memberof UpdateUserEasyPassword
     */
    NewPw?: string | null;
    /**
     * Gets or sets a value indicating whether to reset the password.
     * @type {boolean}
     * @memberof UpdateUserEasyPassword
     */
    ResetPassword?: boolean;
}


