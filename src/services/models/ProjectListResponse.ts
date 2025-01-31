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
import type { ProjectResponse } from './ProjectResponse';
import {
    ProjectResponseFromJSON,
    ProjectResponseFromJSONTyped,
    ProjectResponseToJSON,
} from './ProjectResponse';

/**
 * 
 * @export
 * @interface ProjectListResponse
 */
export interface ProjectListResponse {
    /**
     * 
     * @type {number}
     * @memberof ProjectListResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectListResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectListResponse
     */
    pageSize: number;
    /**
     * 
     * @type {Array<ProjectResponse>}
     * @memberof ProjectListResponse
     */
    projects: Array<ProjectResponse>;
}

/**
 * Check if a given object implements the ProjectListResponse interface.
 */
export function instanceOfProjectListResponse(value: object): value is ProjectListResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('projects' in value) || value['projects'] === undefined) return false;
    return true;
}

export function ProjectListResponseFromJSON(json: any): ProjectListResponse {
    return ProjectListResponseFromJSONTyped(json, false);
}

export function ProjectListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'pageSize': json['page_size'],
        'projects': ((json['projects'] as Array<any>).map(ProjectResponseFromJSON)),
    };
}

export function ProjectListResponseToJSON(value?: ProjectListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'projects': ((value['projects'] as Array<any>).map(ProjectResponseToJSON)),
    };
}

