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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { LiveStreamResponse } from '../models';
// @ts-ignore
import { OpenLiveStreamDto } from '../models';
// @ts-ignore
import { PlaybackInfoDto } from '../models';
// @ts-ignore
import { PlaybackInfoResponse } from '../models';
/**
 * MediaInfoApi - axios parameter creator
 * @export
 */
export const MediaInfoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Closes a media source.
         * @param {string} liveStreamId The livestream id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        closeLiveStream: async (liveStreamId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'liveStreamId' is not null or undefined
            assertParamExists('closeLiveStream', 'liveStreamId', liveStreamId)
            const localVarPath = `/LiveStreams/Close`;
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

            if (liveStreamId !== undefined) {
                localVarQueryParameter['liveStreamId'] = liveStreamId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Tests the network with a request with the size of the bitrate.
         * @param {number} [size] The bitrate. Defaults to 102400.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBitrateTestBytes: async (size?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Playback/BitrateTest`;
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

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets live playback media info for an item.
         * @param {string} itemId The item id.
         * @param {string} userId The user id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaybackInfo: async (itemId: string, userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getPlaybackInfo', 'itemId', itemId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getPlaybackInfo', 'userId', userId)
            const localVarPath = `/Items/{itemId}/PlaybackInfo`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Gets live playback media info for an item.
         * @param {string} itemId The item id.
         * @param {string} [userId] The user id.
         * @param {number} [maxStreamingBitrate] The maximum streaming bitrate.
         * @param {number} [startTimeTicks] The start time in ticks.
         * @param {number} [audioStreamIndex] The audio stream index.
         * @param {number} [subtitleStreamIndex] The subtitle stream index.
         * @param {number} [maxAudioChannels] The maximum number of audio channels.
         * @param {string} [mediaSourceId] The media source id.
         * @param {string} [liveStreamId] The livestream id.
         * @param {boolean} [autoOpenLiveStream] Whether to auto open the livestream.
         * @param {boolean} [enableDirectPlay] Whether to enable direct play. Default: true.
         * @param {boolean} [enableDirectStream] Whether to enable direct stream. Default: true.
         * @param {boolean} [enableTranscoding] Whether to enable transcoding. Default: true.
         * @param {boolean} [allowVideoStreamCopy] Whether to allow to copy the video stream. Default: true.
         * @param {boolean} [allowAudioStreamCopy] Whether to allow to copy the audio stream. Default: true.
         * @param {PlaybackInfoDto} [playbackInfoDto] The playback info.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostedPlaybackInfo: async (itemId: string, userId?: string, maxStreamingBitrate?: number, startTimeTicks?: number, audioStreamIndex?: number, subtitleStreamIndex?: number, maxAudioChannels?: number, mediaSourceId?: string, liveStreamId?: string, autoOpenLiveStream?: boolean, enableDirectPlay?: boolean, enableDirectStream?: boolean, enableTranscoding?: boolean, allowVideoStreamCopy?: boolean, allowAudioStreamCopy?: boolean, playbackInfoDto?: PlaybackInfoDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getPostedPlaybackInfo', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/PlaybackInfo`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
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

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (maxStreamingBitrate !== undefined) {
                localVarQueryParameter['maxStreamingBitrate'] = maxStreamingBitrate;
            }

            if (startTimeTicks !== undefined) {
                localVarQueryParameter['startTimeTicks'] = startTimeTicks;
            }

            if (audioStreamIndex !== undefined) {
                localVarQueryParameter['audioStreamIndex'] = audioStreamIndex;
            }

            if (subtitleStreamIndex !== undefined) {
                localVarQueryParameter['subtitleStreamIndex'] = subtitleStreamIndex;
            }

            if (maxAudioChannels !== undefined) {
                localVarQueryParameter['maxAudioChannels'] = maxAudioChannels;
            }

            if (mediaSourceId !== undefined) {
                localVarQueryParameter['mediaSourceId'] = mediaSourceId;
            }

            if (liveStreamId !== undefined) {
                localVarQueryParameter['liveStreamId'] = liveStreamId;
            }

            if (autoOpenLiveStream !== undefined) {
                localVarQueryParameter['autoOpenLiveStream'] = autoOpenLiveStream;
            }

            if (enableDirectPlay !== undefined) {
                localVarQueryParameter['enableDirectPlay'] = enableDirectPlay;
            }

            if (enableDirectStream !== undefined) {
                localVarQueryParameter['enableDirectStream'] = enableDirectStream;
            }

            if (enableTranscoding !== undefined) {
                localVarQueryParameter['enableTranscoding'] = enableTranscoding;
            }

            if (allowVideoStreamCopy !== undefined) {
                localVarQueryParameter['allowVideoStreamCopy'] = allowVideoStreamCopy;
            }

            if (allowAudioStreamCopy !== undefined) {
                localVarQueryParameter['allowAudioStreamCopy'] = allowAudioStreamCopy;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(playbackInfoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Opens a media source.
         * @param {string} [openToken] The open token.
         * @param {string} [userId] The user id.
         * @param {string} [playSessionId] The play session id.
         * @param {number} [maxStreamingBitrate] The maximum streaming bitrate.
         * @param {number} [startTimeTicks] The start time in ticks.
         * @param {number} [audioStreamIndex] The audio stream index.
         * @param {number} [subtitleStreamIndex] The subtitle stream index.
         * @param {number} [maxAudioChannels] The maximum number of audio channels.
         * @param {string} [itemId] The item id.
         * @param {boolean} [enableDirectPlay] Whether to enable direct play. Default: true.
         * @param {boolean} [enableDirectStream] Whether to enable direct stream. Default: true.
         * @param {OpenLiveStreamDto} [openLiveStreamDto] The open live stream dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        openLiveStream: async (openToken?: string, userId?: string, playSessionId?: string, maxStreamingBitrate?: number, startTimeTicks?: number, audioStreamIndex?: number, subtitleStreamIndex?: number, maxAudioChannels?: number, itemId?: string, enableDirectPlay?: boolean, enableDirectStream?: boolean, openLiveStreamDto?: OpenLiveStreamDto, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/LiveStreams/Open`;
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

            if (openToken !== undefined) {
                localVarQueryParameter['openToken'] = openToken;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (playSessionId !== undefined) {
                localVarQueryParameter['playSessionId'] = playSessionId;
            }

            if (maxStreamingBitrate !== undefined) {
                localVarQueryParameter['maxStreamingBitrate'] = maxStreamingBitrate;
            }

            if (startTimeTicks !== undefined) {
                localVarQueryParameter['startTimeTicks'] = startTimeTicks;
            }

            if (audioStreamIndex !== undefined) {
                localVarQueryParameter['audioStreamIndex'] = audioStreamIndex;
            }

            if (subtitleStreamIndex !== undefined) {
                localVarQueryParameter['subtitleStreamIndex'] = subtitleStreamIndex;
            }

            if (maxAudioChannels !== undefined) {
                localVarQueryParameter['maxAudioChannels'] = maxAudioChannels;
            }

            if (itemId !== undefined) {
                localVarQueryParameter['itemId'] = itemId;
            }

            if (enableDirectPlay !== undefined) {
                localVarQueryParameter['enableDirectPlay'] = enableDirectPlay;
            }

            if (enableDirectStream !== undefined) {
                localVarQueryParameter['enableDirectStream'] = enableDirectStream;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(openLiveStreamDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MediaInfoApi - functional programming interface
 * @export
 */
export const MediaInfoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MediaInfoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Closes a media source.
         * @param {string} liveStreamId The livestream id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async closeLiveStream(liveStreamId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.closeLiveStream(liveStreamId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Tests the network with a request with the size of the bitrate.
         * @param {number} [size] The bitrate. Defaults to 102400.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBitrateTestBytes(size?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBitrateTestBytes(size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets live playback media info for an item.
         * @param {string} itemId The item id.
         * @param {string} userId The user id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlaybackInfo(itemId: string, userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlaybackInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlaybackInfo(itemId, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Gets live playback media info for an item.
         * @param {string} itemId The item id.
         * @param {string} [userId] The user id.
         * @param {number} [maxStreamingBitrate] The maximum streaming bitrate.
         * @param {number} [startTimeTicks] The start time in ticks.
         * @param {number} [audioStreamIndex] The audio stream index.
         * @param {number} [subtitleStreamIndex] The subtitle stream index.
         * @param {number} [maxAudioChannels] The maximum number of audio channels.
         * @param {string} [mediaSourceId] The media source id.
         * @param {string} [liveStreamId] The livestream id.
         * @param {boolean} [autoOpenLiveStream] Whether to auto open the livestream.
         * @param {boolean} [enableDirectPlay] Whether to enable direct play. Default: true.
         * @param {boolean} [enableDirectStream] Whether to enable direct stream. Default: true.
         * @param {boolean} [enableTranscoding] Whether to enable transcoding. Default: true.
         * @param {boolean} [allowVideoStreamCopy] Whether to allow to copy the video stream. Default: true.
         * @param {boolean} [allowAudioStreamCopy] Whether to allow to copy the audio stream. Default: true.
         * @param {PlaybackInfoDto} [playbackInfoDto] The playback info.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPostedPlaybackInfo(itemId: string, userId?: string, maxStreamingBitrate?: number, startTimeTicks?: number, audioStreamIndex?: number, subtitleStreamIndex?: number, maxAudioChannels?: number, mediaSourceId?: string, liveStreamId?: string, autoOpenLiveStream?: boolean, enableDirectPlay?: boolean, enableDirectStream?: boolean, enableTranscoding?: boolean, allowVideoStreamCopy?: boolean, allowAudioStreamCopy?: boolean, playbackInfoDto?: PlaybackInfoDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlaybackInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPostedPlaybackInfo(itemId, userId, maxStreamingBitrate, startTimeTicks, audioStreamIndex, subtitleStreamIndex, maxAudioChannels, mediaSourceId, liveStreamId, autoOpenLiveStream, enableDirectPlay, enableDirectStream, enableTranscoding, allowVideoStreamCopy, allowAudioStreamCopy, playbackInfoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Opens a media source.
         * @param {string} [openToken] The open token.
         * @param {string} [userId] The user id.
         * @param {string} [playSessionId] The play session id.
         * @param {number} [maxStreamingBitrate] The maximum streaming bitrate.
         * @param {number} [startTimeTicks] The start time in ticks.
         * @param {number} [audioStreamIndex] The audio stream index.
         * @param {number} [subtitleStreamIndex] The subtitle stream index.
         * @param {number} [maxAudioChannels] The maximum number of audio channels.
         * @param {string} [itemId] The item id.
         * @param {boolean} [enableDirectPlay] Whether to enable direct play. Default: true.
         * @param {boolean} [enableDirectStream] Whether to enable direct stream. Default: true.
         * @param {OpenLiveStreamDto} [openLiveStreamDto] The open live stream dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async openLiveStream(openToken?: string, userId?: string, playSessionId?: string, maxStreamingBitrate?: number, startTimeTicks?: number, audioStreamIndex?: number, subtitleStreamIndex?: number, maxAudioChannels?: number, itemId?: string, enableDirectPlay?: boolean, enableDirectStream?: boolean, openLiveStreamDto?: OpenLiveStreamDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LiveStreamResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.openLiveStream(openToken, userId, playSessionId, maxStreamingBitrate, startTimeTicks, audioStreamIndex, subtitleStreamIndex, maxAudioChannels, itemId, enableDirectPlay, enableDirectStream, openLiveStreamDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MediaInfoApi - factory interface
 * @export
 */
export const MediaInfoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MediaInfoApiFp(configuration)
    return {
        /**
         * 
         * @summary Closes a media source.
         * @param {string} liveStreamId The livestream id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        closeLiveStream(liveStreamId: string, options?: any): AxiosPromise<void> {
            return localVarFp.closeLiveStream(liveStreamId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Tests the network with a request with the size of the bitrate.
         * @param {number} [size] The bitrate. Defaults to 102400.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBitrateTestBytes(size?: number, options?: any): AxiosPromise<any> {
            return localVarFp.getBitrateTestBytes(size, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets live playback media info for an item.
         * @param {string} itemId The item id.
         * @param {string} userId The user id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaybackInfo(itemId: string, userId: string, options?: any): AxiosPromise<PlaybackInfoResponse> {
            return localVarFp.getPlaybackInfo(itemId, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Gets live playback media info for an item.
         * @param {string} itemId The item id.
         * @param {string} [userId] The user id.
         * @param {number} [maxStreamingBitrate] The maximum streaming bitrate.
         * @param {number} [startTimeTicks] The start time in ticks.
         * @param {number} [audioStreamIndex] The audio stream index.
         * @param {number} [subtitleStreamIndex] The subtitle stream index.
         * @param {number} [maxAudioChannels] The maximum number of audio channels.
         * @param {string} [mediaSourceId] The media source id.
         * @param {string} [liveStreamId] The livestream id.
         * @param {boolean} [autoOpenLiveStream] Whether to auto open the livestream.
         * @param {boolean} [enableDirectPlay] Whether to enable direct play. Default: true.
         * @param {boolean} [enableDirectStream] Whether to enable direct stream. Default: true.
         * @param {boolean} [enableTranscoding] Whether to enable transcoding. Default: true.
         * @param {boolean} [allowVideoStreamCopy] Whether to allow to copy the video stream. Default: true.
         * @param {boolean} [allowAudioStreamCopy] Whether to allow to copy the audio stream. Default: true.
         * @param {PlaybackInfoDto} [playbackInfoDto] The playback info.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostedPlaybackInfo(itemId: string, userId?: string, maxStreamingBitrate?: number, startTimeTicks?: number, audioStreamIndex?: number, subtitleStreamIndex?: number, maxAudioChannels?: number, mediaSourceId?: string, liveStreamId?: string, autoOpenLiveStream?: boolean, enableDirectPlay?: boolean, enableDirectStream?: boolean, enableTranscoding?: boolean, allowVideoStreamCopy?: boolean, allowAudioStreamCopy?: boolean, playbackInfoDto?: PlaybackInfoDto, options?: any): AxiosPromise<PlaybackInfoResponse> {
            return localVarFp.getPostedPlaybackInfo(itemId, userId, maxStreamingBitrate, startTimeTicks, audioStreamIndex, subtitleStreamIndex, maxAudioChannels, mediaSourceId, liveStreamId, autoOpenLiveStream, enableDirectPlay, enableDirectStream, enableTranscoding, allowVideoStreamCopy, allowAudioStreamCopy, playbackInfoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Opens a media source.
         * @param {string} [openToken] The open token.
         * @param {string} [userId] The user id.
         * @param {string} [playSessionId] The play session id.
         * @param {number} [maxStreamingBitrate] The maximum streaming bitrate.
         * @param {number} [startTimeTicks] The start time in ticks.
         * @param {number} [audioStreamIndex] The audio stream index.
         * @param {number} [subtitleStreamIndex] The subtitle stream index.
         * @param {number} [maxAudioChannels] The maximum number of audio channels.
         * @param {string} [itemId] The item id.
         * @param {boolean} [enableDirectPlay] Whether to enable direct play. Default: true.
         * @param {boolean} [enableDirectStream] Whether to enable direct stream. Default: true.
         * @param {OpenLiveStreamDto} [openLiveStreamDto] The open live stream dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        openLiveStream(openToken?: string, userId?: string, playSessionId?: string, maxStreamingBitrate?: number, startTimeTicks?: number, audioStreamIndex?: number, subtitleStreamIndex?: number, maxAudioChannels?: number, itemId?: string, enableDirectPlay?: boolean, enableDirectStream?: boolean, openLiveStreamDto?: OpenLiveStreamDto, options?: any): AxiosPromise<LiveStreamResponse> {
            return localVarFp.openLiveStream(openToken, userId, playSessionId, maxStreamingBitrate, startTimeTicks, audioStreamIndex, subtitleStreamIndex, maxAudioChannels, itemId, enableDirectPlay, enableDirectStream, openLiveStreamDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for closeLiveStream operation in MediaInfoApi.
 * @export
 * @interface MediaInfoApiCloseLiveStreamRequest
 */
export interface MediaInfoApiCloseLiveStreamRequest {
    /**
     * The livestream id.
     * @type {string}
     * @memberof MediaInfoApiCloseLiveStream
     */
    readonly liveStreamId: string
}

/**
 * Request parameters for getBitrateTestBytes operation in MediaInfoApi.
 * @export
 * @interface MediaInfoApiGetBitrateTestBytesRequest
 */
export interface MediaInfoApiGetBitrateTestBytesRequest {
    /**
     * The bitrate. Defaults to 102400.
     * @type {number}
     * @memberof MediaInfoApiGetBitrateTestBytes
     */
    readonly size?: number
}

/**
 * Request parameters for getPlaybackInfo operation in MediaInfoApi.
 * @export
 * @interface MediaInfoApiGetPlaybackInfoRequest
 */
export interface MediaInfoApiGetPlaybackInfoRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof MediaInfoApiGetPlaybackInfo
     */
    readonly itemId: string

    /**
     * The user id.
     * @type {string}
     * @memberof MediaInfoApiGetPlaybackInfo
     */
    readonly userId: string
}

/**
 * Request parameters for getPostedPlaybackInfo operation in MediaInfoApi.
 * @export
 * @interface MediaInfoApiGetPostedPlaybackInfoRequest
 */
export interface MediaInfoApiGetPostedPlaybackInfoRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly itemId: string

    /**
     * The user id.
     * @type {string}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly userId?: string

    /**
     * The maximum streaming bitrate.
     * @type {number}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly maxStreamingBitrate?: number

    /**
     * The start time in ticks.
     * @type {number}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly startTimeTicks?: number

    /**
     * The audio stream index.
     * @type {number}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly audioStreamIndex?: number

    /**
     * The subtitle stream index.
     * @type {number}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly subtitleStreamIndex?: number

    /**
     * The maximum number of audio channels.
     * @type {number}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly maxAudioChannels?: number

    /**
     * The media source id.
     * @type {string}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly mediaSourceId?: string

    /**
     * The livestream id.
     * @type {string}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly liveStreamId?: string

    /**
     * Whether to auto open the livestream.
     * @type {boolean}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly autoOpenLiveStream?: boolean

    /**
     * Whether to enable direct play. Default: true.
     * @type {boolean}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly enableDirectPlay?: boolean

    /**
     * Whether to enable direct stream. Default: true.
     * @type {boolean}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly enableDirectStream?: boolean

    /**
     * Whether to enable transcoding. Default: true.
     * @type {boolean}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly enableTranscoding?: boolean

    /**
     * Whether to allow to copy the video stream. Default: true.
     * @type {boolean}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly allowVideoStreamCopy?: boolean

    /**
     * Whether to allow to copy the audio stream. Default: true.
     * @type {boolean}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly allowAudioStreamCopy?: boolean

    /**
     * The playback info.
     * @type {PlaybackInfoDto}
     * @memberof MediaInfoApiGetPostedPlaybackInfo
     */
    readonly playbackInfoDto?: PlaybackInfoDto
}

/**
 * Request parameters for openLiveStream operation in MediaInfoApi.
 * @export
 * @interface MediaInfoApiOpenLiveStreamRequest
 */
export interface MediaInfoApiOpenLiveStreamRequest {
    /**
     * The open token.
     * @type {string}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly openToken?: string

    /**
     * The user id.
     * @type {string}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly userId?: string

    /**
     * The play session id.
     * @type {string}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly playSessionId?: string

    /**
     * The maximum streaming bitrate.
     * @type {number}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly maxStreamingBitrate?: number

    /**
     * The start time in ticks.
     * @type {number}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly startTimeTicks?: number

    /**
     * The audio stream index.
     * @type {number}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly audioStreamIndex?: number

    /**
     * The subtitle stream index.
     * @type {number}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly subtitleStreamIndex?: number

    /**
     * The maximum number of audio channels.
     * @type {number}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly maxAudioChannels?: number

    /**
     * The item id.
     * @type {string}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly itemId?: string

    /**
     * Whether to enable direct play. Default: true.
     * @type {boolean}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly enableDirectPlay?: boolean

    /**
     * Whether to enable direct stream. Default: true.
     * @type {boolean}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly enableDirectStream?: boolean

    /**
     * The open live stream dto.
     * @type {OpenLiveStreamDto}
     * @memberof MediaInfoApiOpenLiveStream
     */
    readonly openLiveStreamDto?: OpenLiveStreamDto
}

/**
 * MediaInfoApi - object-oriented interface
 * @export
 * @class MediaInfoApi
 * @extends {BaseAPI}
 */
export class MediaInfoApi extends BaseAPI {
    /**
     * 
     * @summary Closes a media source.
     * @param {MediaInfoApiCloseLiveStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaInfoApi
     */
    public closeLiveStream(requestParameters: MediaInfoApiCloseLiveStreamRequest, options?: any) {
        return MediaInfoApiFp(this.configuration).closeLiveStream(requestParameters.liveStreamId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Tests the network with a request with the size of the bitrate.
     * @param {MediaInfoApiGetBitrateTestBytesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaInfoApi
     */
    public getBitrateTestBytes(requestParameters: MediaInfoApiGetBitrateTestBytesRequest = {}, options?: any) {
        return MediaInfoApiFp(this.configuration).getBitrateTestBytes(requestParameters.size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets live playback media info for an item.
     * @param {MediaInfoApiGetPlaybackInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaInfoApi
     */
    public getPlaybackInfo(requestParameters: MediaInfoApiGetPlaybackInfoRequest, options?: any) {
        return MediaInfoApiFp(this.configuration).getPlaybackInfo(requestParameters.itemId, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
     * @summary Gets live playback media info for an item.
     * @param {MediaInfoApiGetPostedPlaybackInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaInfoApi
     */
    public getPostedPlaybackInfo(requestParameters: MediaInfoApiGetPostedPlaybackInfoRequest, options?: any) {
        return MediaInfoApiFp(this.configuration).getPostedPlaybackInfo(requestParameters.itemId, requestParameters.userId, requestParameters.maxStreamingBitrate, requestParameters.startTimeTicks, requestParameters.audioStreamIndex, requestParameters.subtitleStreamIndex, requestParameters.maxAudioChannels, requestParameters.mediaSourceId, requestParameters.liveStreamId, requestParameters.autoOpenLiveStream, requestParameters.enableDirectPlay, requestParameters.enableDirectStream, requestParameters.enableTranscoding, requestParameters.allowVideoStreamCopy, requestParameters.allowAudioStreamCopy, requestParameters.playbackInfoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Opens a media source.
     * @param {MediaInfoApiOpenLiveStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaInfoApi
     */
    public openLiveStream(requestParameters: MediaInfoApiOpenLiveStreamRequest = {}, options?: any) {
        return MediaInfoApiFp(this.configuration).openLiveStream(requestParameters.openToken, requestParameters.userId, requestParameters.playSessionId, requestParameters.maxStreamingBitrate, requestParameters.startTimeTicks, requestParameters.audioStreamIndex, requestParameters.subtitleStreamIndex, requestParameters.maxAudioChannels, requestParameters.itemId, requestParameters.enableDirectPlay, requestParameters.enableDirectStream, requestParameters.openLiveStreamDto, options).then((request) => request(this.axios, this.basePath));
    }
}
