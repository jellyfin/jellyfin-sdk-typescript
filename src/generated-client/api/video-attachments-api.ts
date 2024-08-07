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
import type { ProblemDetails } from '../models';
/**
 * VideoAttachmentsApi - axios parameter creator
 * @export
 */
export const VideoAttachmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get video attachment.
         * @param {string} videoId Video ID.
         * @param {string} mediaSourceId Media Source ID.
         * @param {number} index Attachment Index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachment: async (videoId: string, mediaSourceId: string, index: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('getAttachment', 'videoId', videoId)
            // verify required parameter 'mediaSourceId' is not null or undefined
            assertParamExists('getAttachment', 'mediaSourceId', mediaSourceId)
            // verify required parameter 'index' is not null or undefined
            assertParamExists('getAttachment', 'index', index)
            const localVarPath = `/Videos/{videoId}/{mediaSourceId}/Attachments/{index}`
                .replace(`{${"videoId"}}`, encodeURIComponent(String(videoId)))
                .replace(`{${"mediaSourceId"}}`, encodeURIComponent(String(mediaSourceId)))
                .replace(`{${"index"}}`, encodeURIComponent(String(index)));
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
 * VideoAttachmentsApi - functional programming interface
 * @export
 */
export const VideoAttachmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VideoAttachmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get video attachment.
         * @param {string} videoId Video ID.
         * @param {string} mediaSourceId Media Source ID.
         * @param {number} index Attachment Index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAttachment(videoId: string, mediaSourceId: string, index: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttachment(videoId, mediaSourceId, index, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['VideoAttachmentsApi.getAttachment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * VideoAttachmentsApi - factory interface
 * @export
 */
export const VideoAttachmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VideoAttachmentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get video attachment.
         * @param {VideoAttachmentsApiGetAttachmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachment(requestParameters: VideoAttachmentsApiGetAttachmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<File> {
            return localVarFp.getAttachment(requestParameters.videoId, requestParameters.mediaSourceId, requestParameters.index, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAttachment operation in VideoAttachmentsApi.
 * @export
 * @interface VideoAttachmentsApiGetAttachmentRequest
 */
export interface VideoAttachmentsApiGetAttachmentRequest {
    /**
     * Video ID.
     * @type {string}
     * @memberof VideoAttachmentsApiGetAttachment
     */
    readonly videoId: string

    /**
     * Media Source ID.
     * @type {string}
     * @memberof VideoAttachmentsApiGetAttachment
     */
    readonly mediaSourceId: string

    /**
     * Attachment Index.
     * @type {number}
     * @memberof VideoAttachmentsApiGetAttachment
     */
    readonly index: number
}

/**
 * VideoAttachmentsApi - object-oriented interface
 * @export
 * @class VideoAttachmentsApi
 * @extends {BaseAPI}
 */
export class VideoAttachmentsApi extends BaseAPI {
    /**
     * 
     * @summary Get video attachment.
     * @param {VideoAttachmentsApiGetAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideoAttachmentsApi
     */
    public getAttachment(requestParameters: VideoAttachmentsApiGetAttachmentRequest, options?: RawAxiosRequestConfig) {
        return VideoAttachmentsApiFp(this.configuration).getAttachment(requestParameters.videoId, requestParameters.mediaSourceId, requestParameters.index, options).then((request) => request(this.axios, this.basePath));
    }
}

