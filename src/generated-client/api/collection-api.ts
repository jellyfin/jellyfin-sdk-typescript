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
import type { CollectionCreationResult } from '../models';
/**
 * CollectionApi - axios parameter creator
 * @export
 */
export const CollectionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds items to a collection.
         * @param {string} collectionId The collection id.
         * @param {Array<string>} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToCollection: async (collectionId: string, ids: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('addToCollection', 'collectionId', collectionId)
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('addToCollection', 'ids', ids)
            const localVarPath = `/Collections/{collectionId}/Items`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (ids) {
                localVarQueryParameter['ids'] = ids;
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
         * @summary Creates a new collection.
         * @param {string} [name] The name of the collection.
         * @param {Array<string>} [ids] Item Ids to add to the collection.
         * @param {string} [parentId] Optional. Create the collection within a specific folder.
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCollection: async (name?: string, ids?: Array<string>, parentId?: string, isLocked?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Collections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (isLocked !== undefined) {
                localVarQueryParameter['isLocked'] = isLocked;
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
         * @summary Removes items from a collection.
         * @param {string} collectionId The collection id.
         * @param {Array<string>} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromCollection: async (collectionId: string, ids: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('removeFromCollection', 'collectionId', collectionId)
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('removeFromCollection', 'ids', ids)
            const localVarPath = `/Collections/{collectionId}/Items`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (ids) {
                localVarQueryParameter['ids'] = ids;
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
 * CollectionApi - functional programming interface
 * @export
 */
export const CollectionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CollectionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Adds items to a collection.
         * @param {string} collectionId The collection id.
         * @param {Array<string>} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addToCollection(collectionId: string, ids: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addToCollection(collectionId, ids, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CollectionApi.addToCollection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Creates a new collection.
         * @param {string} [name] The name of the collection.
         * @param {Array<string>} [ids] Item Ids to add to the collection.
         * @param {string} [parentId] Optional. Create the collection within a specific folder.
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCollection(name?: string, ids?: Array<string>, parentId?: string, isLocked?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CollectionCreationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCollection(name, ids, parentId, isLocked, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CollectionApi.createCollection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Removes items from a collection.
         * @param {string} collectionId The collection id.
         * @param {Array<string>} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFromCollection(collectionId: string, ids: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFromCollection(collectionId, ids, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CollectionApi.removeFromCollection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CollectionApi - factory interface
 * @export
 */
export const CollectionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CollectionApiFp(configuration)
    return {
        /**
         * 
         * @summary Adds items to a collection.
         * @param {CollectionApiAddToCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToCollection(requestParameters: CollectionApiAddToCollectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addToCollection(requestParameters.collectionId, requestParameters.ids, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a new collection.
         * @param {CollectionApiCreateCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCollection(requestParameters: CollectionApiCreateCollectionRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CollectionCreationResult> {
            return localVarFp.createCollection(requestParameters.name, requestParameters.ids, requestParameters.parentId, requestParameters.isLocked, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Removes items from a collection.
         * @param {CollectionApiRemoveFromCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromCollection(requestParameters: CollectionApiRemoveFromCollectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeFromCollection(requestParameters.collectionId, requestParameters.ids, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addToCollection operation in CollectionApi.
 * @export
 * @interface CollectionApiAddToCollectionRequest
 */
export interface CollectionApiAddToCollectionRequest {
    /**
     * The collection id.
     * @type {string}
     * @memberof CollectionApiAddToCollection
     */
    readonly collectionId: string

    /**
     * Item ids, comma delimited.
     * @type {Array<string>}
     * @memberof CollectionApiAddToCollection
     */
    readonly ids: Array<string>
}

/**
 * Request parameters for createCollection operation in CollectionApi.
 * @export
 * @interface CollectionApiCreateCollectionRequest
 */
export interface CollectionApiCreateCollectionRequest {
    /**
     * The name of the collection.
     * @type {string}
     * @memberof CollectionApiCreateCollection
     */
    readonly name?: string

    /**
     * Item Ids to add to the collection.
     * @type {Array<string>}
     * @memberof CollectionApiCreateCollection
     */
    readonly ids?: Array<string>

    /**
     * Optional. Create the collection within a specific folder.
     * @type {string}
     * @memberof CollectionApiCreateCollection
     */
    readonly parentId?: string

    /**
     * Whether or not to lock the new collection.
     * @type {boolean}
     * @memberof CollectionApiCreateCollection
     */
    readonly isLocked?: boolean
}

/**
 * Request parameters for removeFromCollection operation in CollectionApi.
 * @export
 * @interface CollectionApiRemoveFromCollectionRequest
 */
export interface CollectionApiRemoveFromCollectionRequest {
    /**
     * The collection id.
     * @type {string}
     * @memberof CollectionApiRemoveFromCollection
     */
    readonly collectionId: string

    /**
     * Item ids, comma delimited.
     * @type {Array<string>}
     * @memberof CollectionApiRemoveFromCollection
     */
    readonly ids: Array<string>
}

/**
 * CollectionApi - object-oriented interface
 * @export
 * @class CollectionApi
 * @extends {BaseAPI}
 */
export class CollectionApi extends BaseAPI {
    /**
     * 
     * @summary Adds items to a collection.
     * @param {CollectionApiAddToCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionApi
     */
    public addToCollection(requestParameters: CollectionApiAddToCollectionRequest, options?: RawAxiosRequestConfig) {
        return CollectionApiFp(this.configuration).addToCollection(requestParameters.collectionId, requestParameters.ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a new collection.
     * @param {CollectionApiCreateCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionApi
     */
    public createCollection(requestParameters: CollectionApiCreateCollectionRequest = {}, options?: RawAxiosRequestConfig) {
        return CollectionApiFp(this.configuration).createCollection(requestParameters.name, requestParameters.ids, requestParameters.parentId, requestParameters.isLocked, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Removes items from a collection.
     * @param {CollectionApiRemoveFromCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionApi
     */
    public removeFromCollection(requestParameters: CollectionApiRemoveFromCollectionRequest, options?: RawAxiosRequestConfig) {
        return CollectionApiFp(this.configuration).removeFromCollection(requestParameters.collectionId, requestParameters.ids, options).then((request) => request(this.axios, this.basePath));
    }
}

