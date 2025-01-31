/* tslint:disable */
/* eslint-disable */
/**
 * Project Manager ( Portfolio )
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FeedbackResponse } from './FeedbackResponse';
import {
    FeedbackResponseFromJSON,
    FeedbackResponseFromJSONTyped,
    FeedbackResponseToJSON,
} from './FeedbackResponse';

/**
 * 
 * @export
 * @interface FeedbackListResponse
 */
export interface FeedbackListResponse {
    /**
     * 
     * @type {number}
     * @memberof FeedbackListResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof FeedbackListResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof FeedbackListResponse
     */
    pageSize: number;
    /**
     * 
     * @type {Array<FeedbackResponse>}
     * @memberof FeedbackListResponse
     */
    feedbacks: Array<FeedbackResponse>;
}

/**
 * Check if a given object implements the FeedbackListResponse interface.
 */
export function instanceOfFeedbackListResponse(value: object): value is FeedbackListResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('feedbacks' in value) || value['feedbacks'] === undefined) return false;
    return true;
}

export function FeedbackListResponseFromJSON(json: any): FeedbackListResponse {
    return FeedbackListResponseFromJSONTyped(json, false);
}

export function FeedbackListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedbackListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'pageSize': json['page_size'],
        'feedbacks': ((json['feedbacks'] as Array<any>).map(FeedbackResponseFromJSON)),
    };
}

export function FeedbackListResponseToJSON(value?: FeedbackListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'feedbacks': ((value['feedbacks'] as Array<any>).map(FeedbackResponseToJSON)),
    };
}

