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
 * @interface PricingResponse
 */
export interface PricingResponse {
    /**
     * 
     * @type {string}
     * @memberof PricingResponse
     */
    tagId: string;
    /**
     * 
     * @type {string}
     * @memberof PricingResponse
     */
    userId: string;
    /**
     * 
     * @type {number}
     * @memberof PricingResponse
     */
    pricePerDay: number;
    /**
     * 
     * @type {string}
     * @memberof PricingResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof PricingResponse
     */
    creationDate: Date;
}

/**
 * Check if a given object implements the PricingResponse interface.
 */
export function instanceOfPricingResponse(value: object): value is PricingResponse {
    if (!('tagId' in value) || value['tagId'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('pricePerDay' in value) || value['pricePerDay'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('creationDate' in value) || value['creationDate'] === undefined) return false;
    return true;
}

export function PricingResponseFromJSON(json: any): PricingResponse {
    return PricingResponseFromJSONTyped(json, false);
}

export function PricingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'tagId': json['tag_id'],
        'userId': json['user_id'],
        'pricePerDay': json['price_per_day'],
        'id': json['id'],
        'creationDate': (new Date(json['creation_date'])),
    };
}

export function PricingResponseToJSON(value?: PricingResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tag_id': value['tagId'],
        'user_id': value['userId'],
        'price_per_day': value['pricePerDay'],
        'id': value['id'],
        'creation_date': ((value['creationDate']).toISOString()),
    };
}

