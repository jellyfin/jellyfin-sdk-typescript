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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { BaseItemDto } from '../models';
// @ts-ignore
import type { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import type { BaseItemKind } from '../models';
// @ts-ignore
import type { ImageType } from '../models';
// @ts-ignore
import type { ItemFields } from '../models';
/**
 * StudiosApi - axios parameter creator
 * @export
 */
export const StudiosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudio: async (name: string, userId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getStudio', 'name', name)
            const localVarPath = `/Studios/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudios: async (startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Studios`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (searchTerm !== undefined) {
                localVarQueryParameter['searchTerm'] = searchTerm;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (excludeItemTypes) {
                localVarQueryParameter['excludeItemTypes'] = excludeItemTypes;
            }

            if (includeItemTypes) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (isFavorite !== undefined) {
                localVarQueryParameter['isFavorite'] = isFavorite;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (nameStartsWithOrGreater !== undefined) {
                localVarQueryParameter['nameStartsWithOrGreater'] = nameStartsWithOrGreater;
            }

            if (nameStartsWith !== undefined) {
                localVarQueryParameter['nameStartsWith'] = nameStartsWith;
            }

            if (nameLessThan !== undefined) {
                localVarQueryParameter['nameLessThan'] = nameLessThan;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
            }

            if (enableTotalRecordCount !== undefined) {
                localVarQueryParameter['enableTotalRecordCount'] = enableTotalRecordCount;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StudiosApi - functional programming interface
 * @export
 */
export const StudiosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StudiosApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudio(name: string, userId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStudio(name, userId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StudiosApi.getStudio']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudios(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStudios(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StudiosApi.getStudios']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * StudiosApi - factory interface
 * @export
 */
export const StudiosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StudiosApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {StudiosApiGetStudioRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudio(requestParameters: StudiosApiGetStudioRequest, options?: RawAxiosRequestConfig): AxiosPromise<BaseItemDto> {
            return localVarFp.getStudio(requestParameters.name, requestParameters.userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {StudiosApiGetStudiosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudios(requestParameters: StudiosApiGetStudiosRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getStudios(requestParameters.startIndex, requestParameters.limit, requestParameters.searchTerm, requestParameters.parentId, requestParameters.fields, requestParameters.excludeItemTypes, requestParameters.includeItemTypes, requestParameters.isFavorite, requestParameters.enableUserData, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, requestParameters.userId, requestParameters.nameStartsWithOrGreater, requestParameters.nameStartsWith, requestParameters.nameLessThan, requestParameters.enableImages, requestParameters.enableTotalRecordCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getStudio operation in StudiosApi.
 * @export
 * @interface StudiosApiGetStudioRequest
 */
export interface StudiosApiGetStudioRequest {
    /**
     * Studio name.
     * @type {string}
     * @memberof StudiosApiGetStudio
     */
    readonly name: string

    /**
     * Optional. Filter by user id, and attach user data.
     * @type {string}
     * @memberof StudiosApiGetStudio
     */
    readonly userId?: string
}

/**
 * Request parameters for getStudios operation in StudiosApi.
 * @export
 * @interface StudiosApiGetStudiosRequest
 */
export interface StudiosApiGetStudiosRequest {
    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof StudiosApiGetStudios
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof StudiosApiGetStudios
     */
    readonly limit?: number

    /**
     * Optional. Search term.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly searchTerm?: string

    /**
     * Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly parentId?: string

    /**
     * Optional. Specify additional fields of information to return in the output.
     * @type {Array<ItemFields>}
     * @memberof StudiosApiGetStudios
     */
    readonly fields?: Array<ItemFields>

    /**
     * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @type {Array<BaseItemKind>}
     * @memberof StudiosApiGetStudios
     */
    readonly excludeItemTypes?: Array<BaseItemKind>

    /**
     * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
     * @type {Array<BaseItemKind>}
     * @memberof StudiosApiGetStudios
     */
    readonly includeItemTypes?: Array<BaseItemKind>

    /**
     * Optional filter by items that are marked as favorite, or not.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly isFavorite?: boolean

    /**
     * Optional, include user data.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly enableUserData?: boolean

    /**
     * Optional, the max number of images to return, per image type.
     * @type {number}
     * @memberof StudiosApiGetStudios
     */
    readonly imageTypeLimit?: number

    /**
     * Optional. The image types to include in the output.
     * @type {Array<ImageType>}
     * @memberof StudiosApiGetStudios
     */
    readonly enableImageTypes?: Array<ImageType>

    /**
     * User id.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly userId?: string

    /**
     * Optional filter by items whose name is sorted equally or greater than a given input string.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly nameStartsWithOrGreater?: string

    /**
     * Optional filter by items whose name is sorted equally than a given input string.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly nameStartsWith?: string

    /**
     * Optional filter by items whose name is equally or lesser than a given input string.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly nameLessThan?: string

    /**
     * Optional, include image information in output.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly enableImages?: boolean

    /**
     * Total record count.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly enableTotalRecordCount?: boolean
}

/**
 * StudiosApi - object-oriented interface
 * @export
 * @class StudiosApi
 * @extends {BaseAPI}
 */
export class StudiosApi extends BaseAPI {
    /**
     * 
     * @summary Gets a studio by name.
     * @param {StudiosApiGetStudioRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApi
     */
    public getStudio(requestParameters: StudiosApiGetStudioRequest, options?: RawAxiosRequestConfig) {
        return StudiosApiFp(this.configuration).getStudio(requestParameters.name, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all studios from a given item, folder, or the entire library.
     * @param {StudiosApiGetStudiosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApi
     */
    public getStudios(requestParameters: StudiosApiGetStudiosRequest = {}, options?: RawAxiosRequestConfig) {
        return StudiosApiFp(this.configuration).getStudios(requestParameters.startIndex, requestParameters.limit, requestParameters.searchTerm, requestParameters.parentId, requestParameters.fields, requestParameters.excludeItemTypes, requestParameters.includeItemTypes, requestParameters.isFavorite, requestParameters.enableUserData, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, requestParameters.userId, requestParameters.nameStartsWithOrGreater, requestParameters.nameStartsWith, requestParameters.nameLessThan, requestParameters.enableImages, requestParameters.enableTotalRecordCount, options).then((request) => request(this.axios, this.basePath));
    }
}

