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

/**
 * @export
 * @interface FeedbackResponse
 */
export interface FeedbackResponse {
    /**
     * @type {string}
     * @memberof FeedbackResponse
     */
    user_id: string;
    /**
     * @type {string}
     * @memberof FeedbackResponse
     */
    project_id: string;
    /**
     * @type {string}
     * @memberof FeedbackResponse
     */
    feedback: string;
    /**
     * @type {number}
     * @memberof FeedbackResponse
     */
    rating: number;
    /**
     * @type {string}
     * @memberof FeedbackResponse
     */
    id: string;
    /**
     * @type {string}
     * @memberof FeedbackResponse
     */
    creation_date: string;
}
