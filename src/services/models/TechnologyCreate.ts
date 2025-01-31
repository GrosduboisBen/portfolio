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
 * @interface TechnologyCreate
 */
export interface TechnologyCreate {
    /**
     * 
     * @type {string}
     * @memberof TechnologyCreate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TechnologyCreate
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof TechnologyCreate
     */
    tagId: string;
    /**
     * 
     * @type {string}
     * @memberof TechnologyCreate
     */
    language: string;
}

/**
 * Check if a given object implements the TechnologyCreate interface.
 */
export function instanceOfTechnologyCreate(value: object): value is TechnologyCreate {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('tagId' in value) || value['tagId'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    return true;
}

export function TechnologyCreateFromJSON(json: any): TechnologyCreate {
    return TechnologyCreateFromJSONTyped(json, false);
}

export function TechnologyCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechnologyCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'tagId': json['tag_id'],
        'language': json['language'],
    };
}

export function TechnologyCreateToJSON(value?: TechnologyCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'tag_id': value['tagId'],
        'language': value['language'],
    };
}

