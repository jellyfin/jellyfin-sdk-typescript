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


import { CodecProfile } from './codec-profile';
import { ContainerProfile } from './container-profile';
import { DeviceIdentification } from './device-identification';
import { DirectPlayProfile } from './direct-play-profile';
import { ResponseProfile } from './response-profile';
import { SubtitleProfile } from './subtitle-profile';
import { TranscodingProfile } from './transcoding-profile';
import { XmlAttribute } from './xml-attribute';

/**
 * A MediaBrowser.Model.Dlna.DeviceProfile represents a set of metadata which determines which content a certain device is able to play.  <br />  Specifically, it defines the supported <see cref=\"P:MediaBrowser.Model.Dlna.DeviceProfile.ContainerProfiles\">containers</see> and  <see cref=\"P:MediaBrowser.Model.Dlna.DeviceProfile.CodecProfiles\">codecs</see> (video and/or audio, including codec profiles and levels)  the device is able to direct play (without transcoding or remuxing),  as well as which <see cref=\"P:MediaBrowser.Model.Dlna.DeviceProfile.TranscodingProfiles\">containers/codecs to transcode to</see> in case it isn\'t.
 * @export
 * @interface DeviceProfile
 */
export interface DeviceProfile {
    /**
     * Gets or sets the name of this device profile.
     * @type {string}
     * @memberof DeviceProfile
     */
    'Name'?: string | null;
    /**
     * Gets or sets the Id.
     * @type {string}
     * @memberof DeviceProfile
     */
    'Id'?: string | null;
    /**
     * 
     * @type {DeviceIdentification}
     * @memberof DeviceProfile
     */
    'Identification'?: DeviceIdentification;
    /**
     * Gets or sets the friendly name of the device profile, which can be shown to users.
     * @type {string}
     * @memberof DeviceProfile
     */
    'FriendlyName'?: string | null;
    /**
     * Gets or sets the manufacturer of the device which this profile represents.
     * @type {string}
     * @memberof DeviceProfile
     */
    'Manufacturer'?: string | null;
    /**
     * Gets or sets an url for the manufacturer of the device which this profile represents.
     * @type {string}
     * @memberof DeviceProfile
     */
    'ManufacturerUrl'?: string | null;
    /**
     * Gets or sets the model name of the device which this profile represents.
     * @type {string}
     * @memberof DeviceProfile
     */
    'ModelName'?: string | null;
    /**
     * Gets or sets the model description of the device which this profile represents.
     * @type {string}
     * @memberof DeviceProfile
     */
    'ModelDescription'?: string | null;
    /**
     * Gets or sets the model number of the device which this profile represents.
     * @type {string}
     * @memberof DeviceProfile
     */
    'ModelNumber'?: string | null;
    /**
     * Gets or sets the ModelUrl.
     * @type {string}
     * @memberof DeviceProfile
     */
    'ModelUrl'?: string | null;
    /**
     * Gets or sets the serial number of the device which this profile represents.
     * @type {string}
     * @memberof DeviceProfile
     */
    'SerialNumber'?: string | null;
    /**
     * Gets or sets a value indicating whether EnableAlbumArtInDidl.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    'EnableAlbumArtInDidl'?: boolean;
    /**
     * Gets or sets a value indicating whether EnableSingleAlbumArtLimit.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    'EnableSingleAlbumArtLimit'?: boolean;
    /**
     * Gets or sets a value indicating whether EnableSingleSubtitleLimit.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    'EnableSingleSubtitleLimit'?: boolean;
    /**
     * Gets or sets the SupportedMediaTypes.
     * @type {string}
     * @memberof DeviceProfile
     */
    'SupportedMediaTypes'?: string;
    /**
     * Gets or sets the UserId.
     * @type {string}
     * @memberof DeviceProfile
     */
    'UserId'?: string | null;
    /**
     * Gets or sets the AlbumArtPn.
     * @type {string}
     * @memberof DeviceProfile
     */
    'AlbumArtPn'?: string | null;
    /**
     * Gets or sets the MaxAlbumArtWidth.
     * @type {number}
     * @memberof DeviceProfile
     */
    'MaxAlbumArtWidth'?: number | null;
    /**
     * Gets or sets the MaxAlbumArtHeight.
     * @type {number}
     * @memberof DeviceProfile
     */
    'MaxAlbumArtHeight'?: number | null;
    /**
     * Gets or sets the maximum allowed width of embedded icons.
     * @type {number}
     * @memberof DeviceProfile
     */
    'MaxIconWidth'?: number | null;
    /**
     * Gets or sets the maximum allowed height of embedded icons.
     * @type {number}
     * @memberof DeviceProfile
     */
    'MaxIconHeight'?: number | null;
    /**
     * Gets or sets the maximum allowed bitrate for all streamed content.
     * @type {number}
     * @memberof DeviceProfile
     */
    'MaxStreamingBitrate'?: number | null;
    /**
     * Gets or sets the maximum allowed bitrate for statically streamed content (= direct played files).
     * @type {number}
     * @memberof DeviceProfile
     */
    'MaxStaticBitrate'?: number | null;
    /**
     * Gets or sets the maximum allowed bitrate for transcoded music streams.
     * @type {number}
     * @memberof DeviceProfile
     */
    'MusicStreamingTranscodingBitrate'?: number | null;
    /**
     * Gets or sets the maximum allowed bitrate for statically streamed (= direct played) music files.
     * @type {number}
     * @memberof DeviceProfile
     */
    'MaxStaticMusicBitrate'?: number | null;
    /**
     * Gets or sets the content of the aggregationFlags element in the urn:schemas-sonycom:av namespace.
     * @type {string}
     * @memberof DeviceProfile
     */
    'SonyAggregationFlags'?: string | null;
    /**
     * Gets or sets the ProtocolInfo.
     * @type {string}
     * @memberof DeviceProfile
     */
    'ProtocolInfo'?: string | null;
    /**
     * Gets or sets the TimelineOffsetSeconds.
     * @type {number}
     * @memberof DeviceProfile
     */
    'TimelineOffsetSeconds'?: number;
    /**
     * Gets or sets a value indicating whether RequiresPlainVideoItems.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    'RequiresPlainVideoItems'?: boolean;
    /**
     * Gets or sets a value indicating whether RequiresPlainFolders.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    'RequiresPlainFolders'?: boolean;
    /**
     * Gets or sets a value indicating whether EnableMSMediaReceiverRegistrar.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    'EnableMSMediaReceiverRegistrar'?: boolean;
    /**
     * Gets or sets a value indicating whether IgnoreTranscodeByteRangeRequests.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    'IgnoreTranscodeByteRangeRequests'?: boolean;
    /**
     * Gets or sets the XmlRootAttributes.
     * @type {Array<XmlAttribute>}
     * @memberof DeviceProfile
     */
    'XmlRootAttributes'?: Array<XmlAttribute>;
    /**
     * Gets or sets the direct play profiles.
     * @type {Array<DirectPlayProfile>}
     * @memberof DeviceProfile
     */
    'DirectPlayProfiles'?: Array<DirectPlayProfile>;
    /**
     * Gets or sets the transcoding profiles.
     * @type {Array<TranscodingProfile>}
     * @memberof DeviceProfile
     */
    'TranscodingProfiles'?: Array<TranscodingProfile>;
    /**
     * Gets or sets the container profiles.
     * @type {Array<ContainerProfile>}
     * @memberof DeviceProfile
     */
    'ContainerProfiles'?: Array<ContainerProfile>;
    /**
     * Gets or sets the codec profiles.
     * @type {Array<CodecProfile>}
     * @memberof DeviceProfile
     */
    'CodecProfiles'?: Array<CodecProfile>;
    /**
     * Gets or sets the ResponseProfiles.
     * @type {Array<ResponseProfile>}
     * @memberof DeviceProfile
     */
    'ResponseProfiles'?: Array<ResponseProfile>;
    /**
     * Gets or sets the subtitle profiles.
     * @type {Array<SubtitleProfile>}
     * @memberof DeviceProfile
     */
    'SubtitleProfiles'?: Array<SubtitleProfile>;
}

