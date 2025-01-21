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
 * @interface InvoiceUpdate
 */
export interface InvoiceUpdate {
    /**
     * 
     * @type {string}
     * @memberof InvoiceUpdate
     */
    reference: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceUpdate
     */
    userId: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceUpdate
     */
    projectId: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceUpdate
     */
    validationStatus: string | null;
    /**
     * 
     * @type {Date}
     * @memberof InvoiceUpdate
     */
    updatedAt: Date | null;
}

/**
 * Check if a given object implements the InvoiceUpdate interface.
 */
export function instanceOfInvoiceUpdate(value: object): value is InvoiceUpdate {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('projectId' in value) || value['projectId'] === undefined) return false;
    if (!('validationStatus' in value) || value['validationStatus'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function InvoiceUpdateFromJSON(json: any): InvoiceUpdate {
    return InvoiceUpdateFromJSONTyped(json, false);
}

export function InvoiceUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'],
        'userId': json['user_id'],
        'projectId': json['project_id'],
        'validationStatus': json['validation_status'],
        'updatedAt': (json['updated_at'] == null ? null : new Date(json['updated_at'])),
    };
}

export function InvoiceUpdateToJSON(value?: InvoiceUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reference': value['reference'],
        'user_id': value['userId'],
        'project_id': value['projectId'],
        'validation_status': value['validationStatus'],
        'updated_at': (value['updatedAt'] == null ? null : (value['updatedAt'] as any).toISOString().substring(0,10)),
    };
}

