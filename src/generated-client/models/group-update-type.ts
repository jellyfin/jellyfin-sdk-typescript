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
 * Enum GroupUpdateType.
 * @export
 * @enum {string}
 */

export enum GroupUpdateType {
    UserJoined = 'UserJoined',
    UserLeft = 'UserLeft',
    GroupJoined = 'GroupJoined',
    GroupLeft = 'GroupLeft',
    StateUpdate = 'StateUpdate',
    PlayQueue = 'PlayQueue',
    NotInGroup = 'NotInGroup',
    GroupDoesNotExist = 'GroupDoesNotExist',
    CreateGroupDenied = 'CreateGroupDenied',
    JoinGroupDenied = 'JoinGroupDenied',
    LibraryAccessDenied = 'LibraryAccessDenied'
}



