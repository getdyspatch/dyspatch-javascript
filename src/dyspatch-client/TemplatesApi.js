/**
 * Dyspatch API
 * # Introduction The Dyspatch API is based on the REST paradigm, and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs, and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch. ## API Client Libraries Dyspatch provides API Clients for popular languages and web frameworks. - [Java](https://github.com/getdyspatch/dyspatch-java) - [Javascript](https://github.com/getdyspatch/dyspatch-javascript) - [Python](https://github.com/getdyspatch/dyspatch-python) - [C#](https://github.com/getdyspatch/dyspatch-dotnet) - [Go](https://github.com/getdyspatch/dyspatch-golang) - [Ruby](https://github.com/getdyspatch/dyspatch-ruby) 
 *
 * The version of the OpenAPI document: 2019.10
 * Contact: support@dyspatch.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import APIError from '../dyspatch-client/APIError';
import TemplateRead from '../dyspatch-client/TemplateRead';
import TemplatesRead from '../dyspatch-client/TemplatesRead';

/**
* Templates service.
* @module dyspatch-client/TemplatesApi
* @version 4.0.0
*/
export default class TemplatesApi {

    /**
    * Constructs a new TemplatesApi. 
    * @alias module:dyspatch-client/TemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTemplateById operation.
     * @callback module:dyspatch-client/TemplatesApi~getTemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:dyspatch-client/TemplateRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Template by ID
     * Gets a template object with the matching ID. If the template has published content the \"compiled\" field will contain the template .
     * @param {String} templateId A template ID
     * @param {module:dyspatch-client/String} targetLanguage The type of templating language to compile as. Should only be used for visual templates.
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2019.10\", set the value to \"application/vnd.dyspatch.2019.10+json\"
     * @param {module:dyspatch-client/TemplatesApi~getTemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:dyspatch-client/TemplateRead}
     */
    getTemplateById(templateId, targetLanguage, accept, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getTemplateById");
      }
      // verify the required parameter 'targetLanguage' is set
      if (targetLanguage === undefined || targetLanguage === null) {
        throw new Error("Missing the required parameter 'targetLanguage' when calling getTemplateById");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getTemplateById");
      }

      let pathParams = {
        'templateId': templateId
      };
      let queryParams = {
        'targetLanguage': targetLanguage
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/vnd.dyspatch.2019.10+json', '*/*'];
      let returnType = TemplateRead;
      return this.apiClient.callApi(
        '/templates/{templateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTemplates operation.
     * @callback module:dyspatch-client/TemplatesApi~getTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:dyspatch-client/TemplatesRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Templates
     * Gets a list of Template Metadata objects for all templates. Up to 25 results returned before results are paginated.
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2019.10\", set the value to \"application/vnd.dyspatch.2019.10+json\"
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor A cursor value used to retrieve a specific page from a paginated result set.
     * @param {module:dyspatch-client/TemplatesApi~getTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:dyspatch-client/TemplatesRead}
     */
    getTemplates(accept, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getTemplates");
      }

      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor']
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/vnd.dyspatch.2019.10+json', '*/*'];
      let returnType = TemplatesRead;
      return this.apiClient.callApi(
        '/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
