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
/**
 * 
 * @export
 * @interface AvailabilityCalendarCreate
 */
export interface AvailabilityCalendarCreate {
    /**
     * 
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    userId: string;
    /**
     * 
     * @type {Date}
     * @memberof AvailabilityCalendarCreate
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof AvailabilityCalendarCreate
     */
    endDate: Date;
    /**
     * 
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    note: string | null;
}

/**
 * Check if a given object implements the AvailabilityCalendarCreate interface.
 */
export function instanceOfAvailabilityCalendarCreate(value: object): value is AvailabilityCalendarCreate {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('endDate' in value) || value['endDate'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('note' in value) || value['note'] === undefined) return false;
    return true;
}

export function AvailabilityCalendarCreateFromJSON(json: any): AvailabilityCalendarCreate {
    return AvailabilityCalendarCreateFromJSONTyped(json, false);
}

export function AvailabilityCalendarCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailabilityCalendarCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
        'startDate': (new Date(json['start_date'])),
        'endDate': (new Date(json['end_date'])),
        'status': json['status'],
        'note': json['note'],
    };
}

export function AvailabilityCalendarCreateToJSON(value?: AvailabilityCalendarCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user_id': value['userId'],
        'start_date': ((value['startDate']).toISOString().substring(0,10)),
        'end_date': ((value['endDate']).toISOString().substring(0,10)),
        'status': value['status'],
        'note': value['note'],
    };
}

