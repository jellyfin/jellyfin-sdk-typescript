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


import type { Configuration } from '../configuration.js';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common.js';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base.js';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models.js';
// @ts-ignore
import { ChannelFeatures } from '../models.js';
// @ts-ignore
import { ItemFields } from '../models.js';
// @ts-ignore
import { ItemFilter } from '../models.js';
// @ts-ignore
import { SortOrder } from '../models.js';
/**
 * ChannelsApi - axios parameter creator
 * @export
 */
export const ChannelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all channel features.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllChannelFeatures: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Channels/Features`;
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
         * @summary Get channel features.
         * @param {string} channelId Channel id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelFeatures: async (channelId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('getChannelFeatures', 'channelId', channelId)
            const localVarPath = `/Channels/{channelId}/Features`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
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
         * @summary Get channel items.
         * @param {string} channelId Channel Id.
         * @param {string} [folderId] Optional. Folder Id.
         * @param {string} [userId] Optional. User Id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<SortOrder>} [sortOrder] Optional. Sort Order - Ascending,Descending.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelItems: async (channelId: string, folderId?: string, userId?: string, startIndex?: number, limit?: number, sortOrder?: Array<SortOrder>, filters?: Array<ItemFilter>, sortBy?: Array<string>, fields?: Array<ItemFields>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('getChannelItems', 'channelId', channelId)
            const localVarPath = `/Channels/{channelId}/Items`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
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

            if (folderId !== undefined) {
                localVarQueryParameter['folderId'] = folderId;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (sortOrder) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filters) {
                localVarQueryParameter['filters'] = filters;
            }

            if (sortBy) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
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
         * @summary Gets available channels.
         * @param {string} [userId] User Id to filter by. Use System.Guid.Empty to not filter by user.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {boolean} [supportsLatestItems] Optional. Filter by channels that support getting latest items.
         * @param {boolean} [supportsMediaDeletion] Optional. Filter by channels that support media deletion.
         * @param {boolean} [isFavorite] Optional. Filter by channels that are favorite.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels: async (userId?: string, startIndex?: number, limit?: number, supportsLatestItems?: boolean, supportsMediaDeletion?: boolean, isFavorite?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Channels`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (supportsLatestItems !== undefined) {
                localVarQueryParameter['supportsLatestItems'] = supportsLatestItems;
            }

            if (supportsMediaDeletion !== undefined) {
                localVarQueryParameter['supportsMediaDeletion'] = supportsMediaDeletion;
            }

            if (isFavorite !== undefined) {
                localVarQueryParameter['isFavorite'] = isFavorite;
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
         * @summary Gets latest channel items.
         * @param {string} [userId] Optional. User Id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [channelIds] Optional. Specify one or more channel id\&#39;s, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestChannelItems: async (userId?: string, startIndex?: number, limit?: number, filters?: Array<ItemFilter>, fields?: Array<ItemFields>, channelIds?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Channels/Items/Latest`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (filters) {
                localVarQueryParameter['filters'] = filters;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (channelIds) {
                localVarQueryParameter['channelIds'] = channelIds;
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
 * ChannelsApi - functional programming interface
 * @export
 */
export const ChannelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChannelsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get all channel features.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllChannelFeatures(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ChannelFeatures>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllChannelFeatures(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get channel features.
         * @param {string} channelId Channel id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChannelFeatures(channelId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelFeatures>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChannelFeatures(channelId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get channel items.
         * @param {string} channelId Channel Id.
         * @param {string} [folderId] Optional. Folder Id.
         * @param {string} [userId] Optional. User Id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<SortOrder>} [sortOrder] Optional. Sort Order - Ascending,Descending.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChannelItems(channelId: string, folderId?: string, userId?: string, startIndex?: number, limit?: number, sortOrder?: Array<SortOrder>, filters?: Array<ItemFilter>, sortBy?: Array<string>, fields?: Array<ItemFields>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChannelItems(channelId, folderId, userId, startIndex, limit, sortOrder, filters, sortBy, fields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets available channels.
         * @param {string} [userId] User Id to filter by. Use System.Guid.Empty to not filter by user.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {boolean} [supportsLatestItems] Optional. Filter by channels that support getting latest items.
         * @param {boolean} [supportsMediaDeletion] Optional. Filter by channels that support media deletion.
         * @param {boolean} [isFavorite] Optional. Filter by channels that are favorite.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChannels(userId?: string, startIndex?: number, limit?: number, supportsLatestItems?: boolean, supportsMediaDeletion?: boolean, isFavorite?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChannels(userId, startIndex, limit, supportsLatestItems, supportsMediaDeletion, isFavorite, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets latest channel items.
         * @param {string} [userId] Optional. User Id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [channelIds] Optional. Specify one or more channel id\&#39;s, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestChannelItems(userId?: string, startIndex?: number, limit?: number, filters?: Array<ItemFilter>, fields?: Array<ItemFields>, channelIds?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLatestChannelItems(userId, startIndex, limit, filters, fields, channelIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChannelsApi - factory interface
 * @export
 */
export const ChannelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChannelsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get all channel features.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllChannelFeatures(options?: AxiosRequestConfig): AxiosPromise<Array<ChannelFeatures>> {
            return localVarFp.getAllChannelFeatures(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get channel features.
         * @param {ChannelsApiGetChannelFeaturesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelFeatures(requestParameters: ChannelsApiGetChannelFeaturesRequest, options?: AxiosRequestConfig): AxiosPromise<ChannelFeatures> {
            return localVarFp.getChannelFeatures(requestParameters.channelId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get channel items.
         * @param {ChannelsApiGetChannelItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelItems(requestParameters: ChannelsApiGetChannelItemsRequest, options?: AxiosRequestConfig): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getChannelItems(requestParameters.channelId, requestParameters.folderId, requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.sortOrder, requestParameters.filters, requestParameters.sortBy, requestParameters.fields, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available channels.
         * @param {ChannelsApiGetChannelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels(requestParameters: ChannelsApiGetChannelsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getChannels(requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.supportsLatestItems, requestParameters.supportsMediaDeletion, requestParameters.isFavorite, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets latest channel items.
         * @param {ChannelsApiGetLatestChannelItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestChannelItems(requestParameters: ChannelsApiGetLatestChannelItemsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getLatestChannelItems(requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.filters, requestParameters.fields, requestParameters.channelIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getChannelFeatures operation in ChannelsApi.
 * @export
 * @interface ChannelsApiGetChannelFeaturesRequest
 */
export interface ChannelsApiGetChannelFeaturesRequest {
    /**
     * Channel id.
     * @type {string}
     * @memberof ChannelsApiGetChannelFeatures
     */
    readonly channelId: string
}

/**
 * Request parameters for getChannelItems operation in ChannelsApi.
 * @export
 * @interface ChannelsApiGetChannelItemsRequest
 */
export interface ChannelsApiGetChannelItemsRequest {
    /**
     * Channel Id.
     * @type {string}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly channelId: string

    /**
     * Optional. Folder Id.
     * @type {string}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly folderId?: string

    /**
     * Optional. User Id.
     * @type {string}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly userId?: string

    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly limit?: number

    /**
     * Optional. Sort Order - Ascending,Descending.
     * @type {Array<SortOrder>}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly sortOrder?: Array<SortOrder>

    /**
     * Optional. Specify additional filters to apply.
     * @type {Array<ItemFilter>}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly filters?: Array<ItemFilter>

    /**
     * Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
     * @type {Array<string>}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly sortBy?: Array<string>

    /**
     * Optional. Specify additional fields of information to return in the output.
     * @type {Array<ItemFields>}
     * @memberof ChannelsApiGetChannelItems
     */
    readonly fields?: Array<ItemFields>
}

/**
 * Request parameters for getChannels operation in ChannelsApi.
 * @export
 * @interface ChannelsApiGetChannelsRequest
 */
export interface ChannelsApiGetChannelsRequest {
    /**
     * User Id to filter by. Use System.Guid.Empty to not filter by user.
     * @type {string}
     * @memberof ChannelsApiGetChannels
     */
    readonly userId?: string

    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof ChannelsApiGetChannels
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof ChannelsApiGetChannels
     */
    readonly limit?: number

    /**
     * Optional. Filter by channels that support getting latest items.
     * @type {boolean}
     * @memberof ChannelsApiGetChannels
     */
    readonly supportsLatestItems?: boolean

    /**
     * Optional. Filter by channels that support media deletion.
     * @type {boolean}
     * @memberof ChannelsApiGetChannels
     */
    readonly supportsMediaDeletion?: boolean

    /**
     * Optional. Filter by channels that are favorite.
     * @type {boolean}
     * @memberof ChannelsApiGetChannels
     */
    readonly isFavorite?: boolean
}

/**
 * Request parameters for getLatestChannelItems operation in ChannelsApi.
 * @export
 * @interface ChannelsApiGetLatestChannelItemsRequest
 */
export interface ChannelsApiGetLatestChannelItemsRequest {
    /**
     * Optional. User Id.
     * @type {string}
     * @memberof ChannelsApiGetLatestChannelItems
     */
    readonly userId?: string

    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof ChannelsApiGetLatestChannelItems
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof ChannelsApiGetLatestChannelItems
     */
    readonly limit?: number

    /**
     * Optional. Specify additional filters to apply.
     * @type {Array<ItemFilter>}
     * @memberof ChannelsApiGetLatestChannelItems
     */
    readonly filters?: Array<ItemFilter>

    /**
     * Optional. Specify additional fields of information to return in the output.
     * @type {Array<ItemFields>}
     * @memberof ChannelsApiGetLatestChannelItems
     */
    readonly fields?: Array<ItemFields>

    /**
     * Optional. Specify one or more channel id\&#39;s, comma delimited.
     * @type {Array<string>}
     * @memberof ChannelsApiGetLatestChannelItems
     */
    readonly channelIds?: Array<string>
}

/**
 * ChannelsApi - object-oriented interface
 * @export
 * @class ChannelsApi
 * @extends {BaseAPI}
 */
export class ChannelsApi extends BaseAPI {
    /**
     * 
     * @summary Get all channel features.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public getAllChannelFeatures(options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).getAllChannelFeatures(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get channel features.
     * @param {ChannelsApiGetChannelFeaturesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public getChannelFeatures(requestParameters: ChannelsApiGetChannelFeaturesRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).getChannelFeatures(requestParameters.channelId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get channel items.
     * @param {ChannelsApiGetChannelItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public getChannelItems(requestParameters: ChannelsApiGetChannelItemsRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).getChannelItems(requestParameters.channelId, requestParameters.folderId, requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.sortOrder, requestParameters.filters, requestParameters.sortBy, requestParameters.fields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available channels.
     * @param {ChannelsApiGetChannelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public getChannels(requestParameters: ChannelsApiGetChannelsRequest = {}, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).getChannels(requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.supportsLatestItems, requestParameters.supportsMediaDeletion, requestParameters.isFavorite, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets latest channel items.
     * @param {ChannelsApiGetLatestChannelItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public getLatestChannelItems(requestParameters: ChannelsApiGetLatestChannelItemsRequest = {}, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).getLatestChannelItems(requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.filters, requestParameters.fields, requestParameters.channelIds, options).then((request) => request(this.axios, this.basePath));
    }
}
