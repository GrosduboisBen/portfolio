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


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  MilestoneCreate,
  MilestoneListResponse,
  MilestoneResponse,
  MilestoneUpdate,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    MilestoneCreateFromJSON,
    MilestoneCreateToJSON,
    MilestoneListResponseFromJSON,
    MilestoneListResponseToJSON,
    MilestoneResponseFromJSON,
    MilestoneResponseToJSON,
    MilestoneUpdateFromJSON,
    MilestoneUpdateToJSON,
} from '../models/index';

export interface CreateApiMilestonesPostRequest {
    milestoneCreate: MilestoneCreate;
}

export interface DeleteApiMilestonesMilestoneIdDeleteRequest {
    milestoneId: string;
}

export interface ReadMilestoneApiMilestonesMilestoneIdGetRequest {
    milestoneId: string;
}

export interface ReadMilestonesApiMilestonesGetRequest {
    page?: number;
    pageSize?: number;
}

export interface UpdateApiMilestonesMilestoneIdPutRequest {
    milestoneId: string;
    milestoneUpdate: MilestoneUpdate;
}

/**
 * MilestonesApi - interface
 * 
 * @export
 * @interface MilestonesApiInterface
 */
export interface MilestonesApiInterface {
    /**
     * Create a new milestone.
     * @summary Create
     * @param {MilestoneCreate} milestoneCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApiInterface
     */
    createApiMilestonesPostRaw(requestParameters: CreateApiMilestonesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneResponse>>;

    /**
     * Create a new milestone.
     * Create
     */
    createApiMilestonesPost(milestoneCreate: MilestoneCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneResponse>;

    /**
     * Delete a milestone by ID.
     * @summary Delete
     * @param {string} milestoneId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApiInterface
     */
    deleteApiMilestonesMilestoneIdDeleteRaw(requestParameters: DeleteApiMilestonesMilestoneIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Delete a milestone by ID.
     * Delete
     */
    deleteApiMilestonesMilestoneIdDelete(milestoneId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * Retrieve a milestone by ID.
     * @summary Read Milestone
     * @param {string} milestoneId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApiInterface
     */
    readMilestoneApiMilestonesMilestoneIdGetRaw(requestParameters: ReadMilestoneApiMilestonesMilestoneIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneResponse>>;

    /**
     * Retrieve a milestone by ID.
     * Read Milestone
     */
    readMilestoneApiMilestonesMilestoneIdGet(milestoneId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneResponse>;

    /**
     * Retrieve a list of milestones with pagination.
     * @summary Read Milestones
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApiInterface
     */
    readMilestonesApiMilestonesGetRaw(requestParameters: ReadMilestonesApiMilestonesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneListResponse>>;

    /**
     * Retrieve a list of milestones with pagination.
     * Read Milestones
     */
    readMilestonesApiMilestonesGet(page?: number, pageSize?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneListResponse>;

    /**
     * Update a milestone by ID.
     * @summary Update
     * @param {string} milestoneId 
     * @param {MilestoneUpdate} milestoneUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApiInterface
     */
    updateApiMilestonesMilestoneIdPutRaw(requestParameters: UpdateApiMilestonesMilestoneIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneResponse>>;

    /**
     * Update a milestone by ID.
     * Update
     */
    updateApiMilestonesMilestoneIdPut(milestoneId: string, milestoneUpdate: MilestoneUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneResponse>;

}

/**
 * 
 */
export class MilestonesApi extends runtime.BaseAPI implements MilestonesApiInterface {

    /**
     * Create a new milestone.
     * Create
     */
    async createApiMilestonesPostRaw(requestParameters: CreateApiMilestonesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneResponse>> {
        if (requestParameters['milestoneCreate'] == null) {
            throw new runtime.RequiredError(
                'milestoneCreate',
                'Required parameter "milestoneCreate" was null or undefined when calling createApiMilestonesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/milestones/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MilestoneCreateToJSON(requestParameters['milestoneCreate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MilestoneResponseFromJSON(jsonValue));
    }

    /**
     * Create a new milestone.
     * Create
     */
    async createApiMilestonesPost(milestoneCreate: MilestoneCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneResponse> {
        const response = await this.createApiMilestonesPostRaw({ milestoneCreate: milestoneCreate }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a milestone by ID.
     * Delete
     */
    async deleteApiMilestonesMilestoneIdDeleteRaw(requestParameters: DeleteApiMilestonesMilestoneIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['milestoneId'] == null) {
            throw new runtime.RequiredError(
                'milestoneId',
                'Required parameter "milestoneId" was null or undefined when calling deleteApiMilestonesMilestoneIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/milestones/{milestone_id}`.replace(`{${"milestone_id"}}`, encodeURIComponent(String(requestParameters['milestoneId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete a milestone by ID.
     * Delete
     */
    async deleteApiMilestonesMilestoneIdDelete(milestoneId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteApiMilestonesMilestoneIdDeleteRaw({ milestoneId: milestoneId }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a milestone by ID.
     * Read Milestone
     */
    async readMilestoneApiMilestonesMilestoneIdGetRaw(requestParameters: ReadMilestoneApiMilestonesMilestoneIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneResponse>> {
        if (requestParameters['milestoneId'] == null) {
            throw new runtime.RequiredError(
                'milestoneId',
                'Required parameter "milestoneId" was null or undefined when calling readMilestoneApiMilestonesMilestoneIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/milestones/{milestone_id}`.replace(`{${"milestone_id"}}`, encodeURIComponent(String(requestParameters['milestoneId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MilestoneResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a milestone by ID.
     * Read Milestone
     */
    async readMilestoneApiMilestonesMilestoneIdGet(milestoneId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneResponse> {
        const response = await this.readMilestoneApiMilestonesMilestoneIdGetRaw({ milestoneId: milestoneId }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of milestones with pagination.
     * Read Milestones
     */
    async readMilestonesApiMilestonesGetRaw(requestParameters: ReadMilestonesApiMilestonesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page_size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/milestones/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MilestoneListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of milestones with pagination.
     * Read Milestones
     */
    async readMilestonesApiMilestonesGet(page?: number, pageSize?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneListResponse> {
        const response = await this.readMilestonesApiMilestonesGetRaw({ page: page, pageSize: pageSize }, initOverrides);
        return await response.value();
    }

    /**
     * Update a milestone by ID.
     * Update
     */
    async updateApiMilestonesMilestoneIdPutRaw(requestParameters: UpdateApiMilestonesMilestoneIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MilestoneResponse>> {
        if (requestParameters['milestoneId'] == null) {
            throw new runtime.RequiredError(
                'milestoneId',
                'Required parameter "milestoneId" was null or undefined when calling updateApiMilestonesMilestoneIdPut().'
            );
        }

        if (requestParameters['milestoneUpdate'] == null) {
            throw new runtime.RequiredError(
                'milestoneUpdate',
                'Required parameter "milestoneUpdate" was null or undefined when calling updateApiMilestonesMilestoneIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/milestones/{milestone_id}`.replace(`{${"milestone_id"}}`, encodeURIComponent(String(requestParameters['milestoneId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MilestoneUpdateToJSON(requestParameters['milestoneUpdate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MilestoneResponseFromJSON(jsonValue));
    }

    /**
     * Update a milestone by ID.
     * Update
     */
    async updateApiMilestonesMilestoneIdPut(milestoneId: string, milestoneUpdate: MilestoneUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MilestoneResponse> {
        const response = await this.updateApiMilestonesMilestoneIdPutRaw({ milestoneId: milestoneId, milestoneUpdate: milestoneUpdate }, initOverrides);
        return await response.value();
    }

}
