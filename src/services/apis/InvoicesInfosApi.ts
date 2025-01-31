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
  InvoiceInfoCreate,
  InvoiceInfoResponse,
  InvoiceInfoUpdate,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    InvoiceInfoCreateFromJSON,
    InvoiceInfoCreateToJSON,
    InvoiceInfoResponseFromJSON,
    InvoiceInfoResponseToJSON,
    InvoiceInfoUpdateFromJSON,
    InvoiceInfoUpdateToJSON,
} from '../models/index';

export interface CreateApiInvoicesInfosPostRequest {
    invoiceInfoCreate: InvoiceInfoCreate;
}

export interface DeleteApiInvoicesInfosInfoIdDeleteRequest {
    infoId: string;
}

export interface ReadApiInvoicesInfosInfoIdGetRequest {
    infoId: string;
}

export interface UpdateApiInvoicesInfosInfoIdPutRequest {
    infoId: string;
    invoiceInfoUpdate: InvoiceInfoUpdate;
}

/**
 * InvoicesInfosApi - interface
 * 
 * @export
 * @interface InvoicesInfosApiInterface
 */
export interface InvoicesInfosApiInterface {
    /**
     * Create a new invoice info.
     * @summary Create
     * @param {InvoiceInfoCreate} invoiceInfoCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoicesInfosApiInterface
     */
    createApiInvoicesInfosPostRaw(requestParameters: CreateApiInvoicesInfosPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceInfoResponse>>;

    /**
     * Create a new invoice info.
     * Create
     */
    createApiInvoicesInfosPost(invoiceInfoCreate: InvoiceInfoCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceInfoResponse>;

    /**
     * Delete invoice info by ID.
     * @summary Delete
     * @param {string} infoId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoicesInfosApiInterface
     */
    deleteApiInvoicesInfosInfoIdDeleteRaw(requestParameters: DeleteApiInvoicesInfosInfoIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Delete invoice info by ID.
     * Delete
     */
    deleteApiInvoicesInfosInfoIdDelete(infoId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * Retrieve invoice info by ID.
     * @summary Read
     * @param {string} infoId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoicesInfosApiInterface
     */
    readApiInvoicesInfosInfoIdGetRaw(requestParameters: ReadApiInvoicesInfosInfoIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceInfoResponse>>;

    /**
     * Retrieve invoice info by ID.
     * Read
     */
    readApiInvoicesInfosInfoIdGet(infoId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceInfoResponse>;

    /**
     * Update invoice info by ID.
     * @summary Update
     * @param {string} infoId 
     * @param {InvoiceInfoUpdate} invoiceInfoUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoicesInfosApiInterface
     */
    updateApiInvoicesInfosInfoIdPutRaw(requestParameters: UpdateApiInvoicesInfosInfoIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceInfoResponse>>;

    /**
     * Update invoice info by ID.
     * Update
     */
    updateApiInvoicesInfosInfoIdPut(infoId: string, invoiceInfoUpdate: InvoiceInfoUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceInfoResponse>;

}

/**
 * 
 */
export class InvoicesInfosApi extends runtime.BaseAPI implements InvoicesInfosApiInterface {

    /**
     * Create a new invoice info.
     * Create
     */
    async createApiInvoicesInfosPostRaw(requestParameters: CreateApiInvoicesInfosPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceInfoResponse>> {
        if (requestParameters['invoiceInfoCreate'] == null) {
            throw new runtime.RequiredError(
                'invoiceInfoCreate',
                'Required parameter "invoiceInfoCreate" was null or undefined when calling createApiInvoicesInfosPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/invoices_infos/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceInfoCreateToJSON(requestParameters['invoiceInfoCreate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceInfoResponseFromJSON(jsonValue));
    }

    /**
     * Create a new invoice info.
     * Create
     */
    async createApiInvoicesInfosPost(invoiceInfoCreate: InvoiceInfoCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceInfoResponse> {
        const response = await this.createApiInvoicesInfosPostRaw({ invoiceInfoCreate: invoiceInfoCreate }, initOverrides);
        return await response.value();
    }

    /**
     * Delete invoice info by ID.
     * Delete
     */
    async deleteApiInvoicesInfosInfoIdDeleteRaw(requestParameters: DeleteApiInvoicesInfosInfoIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['infoId'] == null) {
            throw new runtime.RequiredError(
                'infoId',
                'Required parameter "infoId" was null or undefined when calling deleteApiInvoicesInfosInfoIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/invoices_infos/{info_id}`.replace(`{${"info_id"}}`, encodeURIComponent(String(requestParameters['infoId']))),
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
     * Delete invoice info by ID.
     * Delete
     */
    async deleteApiInvoicesInfosInfoIdDelete(infoId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteApiInvoicesInfosInfoIdDeleteRaw({ infoId: infoId }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve invoice info by ID.
     * Read
     */
    async readApiInvoicesInfosInfoIdGetRaw(requestParameters: ReadApiInvoicesInfosInfoIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceInfoResponse>> {
        if (requestParameters['infoId'] == null) {
            throw new runtime.RequiredError(
                'infoId',
                'Required parameter "infoId" was null or undefined when calling readApiInvoicesInfosInfoIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/invoices_infos/{info_id}`.replace(`{${"info_id"}}`, encodeURIComponent(String(requestParameters['infoId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceInfoResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve invoice info by ID.
     * Read
     */
    async readApiInvoicesInfosInfoIdGet(infoId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceInfoResponse> {
        const response = await this.readApiInvoicesInfosInfoIdGetRaw({ infoId: infoId }, initOverrides);
        return await response.value();
    }

    /**
     * Update invoice info by ID.
     * Update
     */
    async updateApiInvoicesInfosInfoIdPutRaw(requestParameters: UpdateApiInvoicesInfosInfoIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceInfoResponse>> {
        if (requestParameters['infoId'] == null) {
            throw new runtime.RequiredError(
                'infoId',
                'Required parameter "infoId" was null or undefined when calling updateApiInvoicesInfosInfoIdPut().'
            );
        }

        if (requestParameters['invoiceInfoUpdate'] == null) {
            throw new runtime.RequiredError(
                'invoiceInfoUpdate',
                'Required parameter "invoiceInfoUpdate" was null or undefined when calling updateApiInvoicesInfosInfoIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/invoices_infos/{info_id}`.replace(`{${"info_id"}}`, encodeURIComponent(String(requestParameters['infoId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceInfoUpdateToJSON(requestParameters['invoiceInfoUpdate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceInfoResponseFromJSON(jsonValue));
    }

    /**
     * Update invoice info by ID.
     * Update
     */
    async updateApiInvoicesInfosInfoIdPut(infoId: string, invoiceInfoUpdate: InvoiceInfoUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceInfoResponse> {
        const response = await this.updateApiInvoicesInfosInfoIdPutRaw({ infoId: infoId, invoiceInfoUpdate: invoiceInfoUpdate }, initOverrides);
        return await response.value();
    }

}
