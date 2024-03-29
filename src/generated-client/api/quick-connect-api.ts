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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { QuickConnectResult } from '../models';
/**
 * QuickConnectApi - axios parameter creator
 * @export
 */
export const QuickConnectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Authorizes a pending quick connect request.
         * @param {string} code Quick connect code to authorize.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('authorize', 'code', code)
            const localVarPath = `/QuickConnect/Authorize`;
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

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
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
         * @summary Attempts to retrieve authentication information.
         * @param {string} secret Secret previously returned from the Initiate endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        connect: async (secret: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'secret' is not null or undefined
            assertParamExists('connect', 'secret', secret)
            const localVarPath = `/QuickConnect/Connect`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (secret !== undefined) {
                localVarQueryParameter['secret'] = secret;
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
         * @summary Gets the current quick connect state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnabled: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/QuickConnect/Enabled`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Initiate a new quick connect request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiate: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/QuickConnect/Initiate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * QuickConnectApi - functional programming interface
 * @export
 */
export const QuickConnectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QuickConnectApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Authorizes a pending quick connect request.
         * @param {string} code Quick connect code to authorize.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authorize(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authorize(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Attempts to retrieve authentication information.
         * @param {string} secret Secret previously returned from the Initiate endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async connect(secret: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuickConnectResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.connect(secret, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the current quick connect state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEnabled(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnabled(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Initiate a new quick connect request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async initiate(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuickConnectResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.initiate(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QuickConnectApi - factory interface
 * @export
 */
export const QuickConnectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QuickConnectApiFp(configuration)
    return {
        /**
         * 
         * @summary Authorizes a pending quick connect request.
         * @param {string} code Quick connect code to authorize.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize(code: string, options?: any): AxiosPromise<boolean> {
            return localVarFp.authorize(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Attempts to retrieve authentication information.
         * @param {string} secret Secret previously returned from the Initiate endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        connect(secret: string, options?: any): AxiosPromise<QuickConnectResult> {
            return localVarFp.connect(secret, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the current quick connect state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnabled(options?: any): AxiosPromise<boolean> {
            return localVarFp.getEnabled(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Initiate a new quick connect request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiate(options?: any): AxiosPromise<QuickConnectResult> {
            return localVarFp.initiate(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authorize operation in QuickConnectApi.
 * @export
 * @interface QuickConnectApiAuthorizeRequest
 */
export interface QuickConnectApiAuthorizeRequest {
    /**
     * Quick connect code to authorize.
     * @type {string}
     * @memberof QuickConnectApiAuthorize
     */
    readonly code: string
}

/**
 * Request parameters for connect operation in QuickConnectApi.
 * @export
 * @interface QuickConnectApiConnectRequest
 */
export interface QuickConnectApiConnectRequest {
    /**
     * Secret previously returned from the Initiate endpoint.
     * @type {string}
     * @memberof QuickConnectApiConnect
     */
    readonly secret: string
}

/**
 * QuickConnectApi - object-oriented interface
 * @export
 * @class QuickConnectApi
 * @extends {BaseAPI}
 */
export class QuickConnectApi extends BaseAPI {
    /**
     * 
     * @summary Authorizes a pending quick connect request.
     * @param {QuickConnectApiAuthorizeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public authorize(requestParameters: QuickConnectApiAuthorizeRequest, options?: AxiosRequestConfig) {
        return QuickConnectApiFp(this.configuration).authorize(requestParameters.code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Attempts to retrieve authentication information.
     * @param {QuickConnectApiConnectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public connect(requestParameters: QuickConnectApiConnectRequest, options?: AxiosRequestConfig) {
        return QuickConnectApiFp(this.configuration).connect(requestParameters.secret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the current quick connect state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public getEnabled(options?: AxiosRequestConfig) {
        return QuickConnectApiFp(this.configuration).getEnabled(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Initiate a new quick connect request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickConnectApi
     */
    public initiate(options?: AxiosRequestConfig) {
        return QuickConnectApiFp(this.configuration).initiate(options).then((request) => request(this.axios, this.basePath));
    }
}
