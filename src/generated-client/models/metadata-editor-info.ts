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


// May contain unused imports in some cases
// @ts-ignore
import type { CollectionType } from './collection-type';
// May contain unused imports in some cases
// @ts-ignore
import type { CountryInfo } from './country-info';
// May contain unused imports in some cases
// @ts-ignore
import type { CultureDto } from './culture-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { ExternalIdInfo } from './external-id-info';
// May contain unused imports in some cases
// @ts-ignore
import type { NameValuePair } from './name-value-pair';
// May contain unused imports in some cases
// @ts-ignore
import type { ParentalRating } from './parental-rating';

/**
 * A class representing metadata editor information.
 * @export
 * @interface MetadataEditorInfo
 */
export interface MetadataEditorInfo {
    /**
     * Gets or sets the parental rating options.
     * @type {Array<ParentalRating>}
     * @memberof MetadataEditorInfo
     */
    'ParentalRatingOptions'?: Array<ParentalRating>;
    /**
     * Gets or sets the countries.
     * @type {Array<CountryInfo>}
     * @memberof MetadataEditorInfo
     */
    'Countries'?: Array<CountryInfo>;
    /**
     * Gets or sets the cultures.
     * @type {Array<CultureDto>}
     * @memberof MetadataEditorInfo
     */
    'Cultures'?: Array<CultureDto>;
    /**
     * Gets or sets the external id infos.
     * @type {Array<ExternalIdInfo>}
     * @memberof MetadataEditorInfo
     */
    'ExternalIdInfos'?: Array<ExternalIdInfo>;
    /**
     * 
     * @type {CollectionType}
     * @memberof MetadataEditorInfo
     */
    'ContentType'?: CollectionType;
    /**
     * Gets or sets the content type options.
     * @type {Array<NameValuePair>}
     * @memberof MetadataEditorInfo
     */
    'ContentTypeOptions'?: Array<NameValuePair>;
}



