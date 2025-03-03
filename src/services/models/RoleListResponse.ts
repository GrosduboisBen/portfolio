// tslint:disable
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

import type {
    RoleResponse,
} from './';

/**
 * @export
 * @interface RoleListResponse
 */
export interface RoleListResponse {
    /**
     * @type {number}
     * @memberof RoleListResponse
     */
    total: number;
    /**
     * @type {number}
     * @memberof RoleListResponse
     */
    page: number;
    /**
     * @type {number}
     * @memberof RoleListResponse
     */
    page_size: number;
    /**
     * @type {Array<RoleResponse>}
     * @memberof RoleListResponse
     */
    roles: Array<RoleResponse>;
}
