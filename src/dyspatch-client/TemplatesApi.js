/**
 * Dyspatch API
 * # Introduction  The Dyspatch API is based on the REST paradigm and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch.
 *
 * OpenAPI spec version: 2019.10
 * Contact: support@dyspatch.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'dyspatch-client/APIError', 'dyspatch-client/TemplateRead', 'dyspatch-client/TemplatesRead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../dyspatch-client/APIError'), require('../dyspatch-client/TemplateRead'), require('../dyspatch-client/TemplatesRead'));
  } else {
    // Browser globals (root is window)
    if (!root.DyspatchClient) {
      root.DyspatchClient = {};
    }
    root.DyspatchClient.TemplatesApi = factory(root.DyspatchClient.ApiClient, root.DyspatchClient.APIError, root.DyspatchClient.TemplateRead, root.DyspatchClient.TemplatesRead);
  }
}(this, function(ApiClient, APIError, TemplateRead, TemplatesRead) {
  'use strict';

  /**
   * Templates service.
   * @module dyspatch-client/TemplatesApi
   * @version 3.0.1
   */

  /**
   * Constructs a new TemplatesApi. 
   * @alias module:dyspatch-client/TemplatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the templatesGet operation.
     * @callback module:dyspatch-client/TemplatesApi~templatesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:dyspatch-client/TemplatesRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Templates
     * Gets a list of Template Metadata objects for all templates. Up to 25 results returned before results are paginated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor A cursor value used to retrieve a specific page from a paginated result set.
     * @param {module:dyspatch-client/TemplatesApi~templatesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:dyspatch-client/TemplatesRead}
     */
    this.templatesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/vnd.dyspatch.2019.10+json'];
      var returnType = TemplatesRead;

      return this.apiClient.callApi(
        '/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the templatesTemplateIdGet operation.
     * @callback module:dyspatch-client/TemplatesApi~templatesTemplateIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:dyspatch-client/TemplateRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Template by ID
     * Gets a template object with the matching ID. If the template has published content the \&quot;compiled\&quot; field will contain the template .
     * @param {String} templateId A template ID
     * @param {module:dyspatch-client/String} targetLanguage The type of templating language to compile as. Should only be used for visual templates.
     * @param {module:dyspatch-client/TemplatesApi~templatesTemplateIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:dyspatch-client/TemplateRead}
     */
    this.templatesTemplateIdGet = function(templateId, targetLanguage, callback) {
      var postBody = null;

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling templatesTemplateIdGet");
      }

      // verify the required parameter 'targetLanguage' is set
      if (targetLanguage === undefined || targetLanguage === null) {
        throw new Error("Missing the required parameter 'targetLanguage' when calling templatesTemplateIdGet");
      }


      var pathParams = {
        'templateId': templateId
      };
      var queryParams = {
        'targetLanguage': targetLanguage,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/vnd.dyspatch.2019.10+json'];
      var returnType = TemplateRead;

      return this.apiClient.callApi(
        '/templates/{templateId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
