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
 * @interface MissionResponse
 */
export interface MissionResponse {
    /**
     * 
     * @type {string}
     * @memberof MissionResponse
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof MissionResponse
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof MissionResponse
     */
    projectId: string;
    /**
     * 
     * @type {string}
     * @memberof MissionResponse
     */
    milestoneId: string | null;
    /**
     * 
     * @type {string}
     * @memberof MissionResponse
     */
    technologyId: string | null;
    /**
     * 
     * @type {Date}
     * @memberof MissionResponse
     */
    startDate: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof MissionResponse
     */
    dueDate: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof MissionResponse
     */
    estimatedDelivery: Date | null;
    /**
     * 
     * @type {string}
     * @memberof MissionResponse
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof MissionResponse
     */
    estimatedCost: number | null;
    /**
     * 
     * @type {string}
     * @memberof MissionResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof MissionResponse
     */
    creationDate: Date;
}

/**
 * Check if a given object implements the MissionResponse interface.
 */
export function instanceOfMissionResponse(value: object): value is MissionResponse {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('projectId' in value) || value['projectId'] === undefined) return false;
    if (!('milestoneId' in value) || value['milestoneId'] === undefined) return false;
    if (!('technologyId' in value) || value['technologyId'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('dueDate' in value) || value['dueDate'] === undefined) return false;
    if (!('estimatedDelivery' in value) || value['estimatedDelivery'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('estimatedCost' in value) || value['estimatedCost'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('creationDate' in value) || value['creationDate'] === undefined) return false;
    return true;
}

export function MissionResponseFromJSON(json: any): MissionResponse {
    return MissionResponseFromJSONTyped(json, false);
}

export function MissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MissionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
        'projectId': json['project_id'],
        'milestoneId': json['milestone_id'],
        'technologyId': json['technology_id'],
        'startDate': (json['start_date'] == null ? null : new Date(json['start_date'])),
        'dueDate': (json['due_date'] == null ? null : new Date(json['due_date'])),
        'estimatedDelivery': (json['estimated_delivery'] == null ? null : new Date(json['estimated_delivery'])),
        'status': json['status'],
        'estimatedCost': json['estimated_cost'],
        'id': json['id'],
        'creationDate': (new Date(json['creation_date'])),
    };
}

export function MissionResponseToJSON(value?: MissionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
        'project_id': value['projectId'],
        'milestone_id': value['milestoneId'],
        'technology_id': value['technologyId'],
        'start_date': (value['startDate'] == null ? null : (value['startDate'] as any).toISOString().substring(0,10)),
        'due_date': (value['dueDate'] == null ? null : (value['dueDate'] as any).toISOString().substring(0,10)),
        'estimated_delivery': (value['estimatedDelivery'] == null ? null : (value['estimatedDelivery'] as any).toISOString().substring(0,10)),
        'status': value['status'],
        'estimated_cost': value['estimatedCost'],
        'id': value['id'],
        'creation_date': ((value['creationDate']).toISOString()),
    };
}

