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
import type { MissionResponse } from './MissionResponse';
import {
    MissionResponseFromJSON,
    MissionResponseFromJSONTyped,
    MissionResponseToJSON,
} from './MissionResponse';

/**
 * 
 * @export
 * @interface MissionListResponse
 */
export interface MissionListResponse {
    /**
     * 
     * @type {number}
     * @memberof MissionListResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof MissionListResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof MissionListResponse
     */
    pageSize: number;
    /**
     * 
     * @type {Array<MissionResponse>}
     * @memberof MissionListResponse
     */
    missions: Array<MissionResponse>;
}

/**
 * Check if a given object implements the MissionListResponse interface.
 */
export function instanceOfMissionListResponse(value: object): value is MissionListResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('missions' in value) || value['missions'] === undefined) return false;
    return true;
}

export function MissionListResponseFromJSON(json: any): MissionListResponse {
    return MissionListResponseFromJSONTyped(json, false);
}

export function MissionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MissionListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'pageSize': json['page_size'],
        'missions': ((json['missions'] as Array<any>).map(MissionResponseFromJSON)),
    };
}

export function MissionListResponseToJSON(value?: MissionListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'missions': ((value['missions'] as Array<any>).map(MissionResponseToJSON)),
    };
}

