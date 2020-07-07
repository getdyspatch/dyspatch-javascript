/**
 * Dyspatch API
 * # Introduction  The Dyspatch API is based on the REST paradigm, and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs, and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch.  ## API Client Libraries Dyspatch provides API Clients for popular languages and web frameworks.  - [Java](https://github.com/getdyspatch/dyspatch-java) - [Javascript](https://github.com/getdyspatch/dyspatch-javascript) - [Python](https://github.com/getdyspatch/dyspatch-python) - [C#](https://github.com/getdyspatch/dyspatch-dotnet) - [Go](https://github.com/getdyspatch/dyspatch-golang) - [Ruby](https://github.com/getdyspatch/dyspatch-ruby) 
 *
 * The version of the OpenAPI document: 2020.04
 * Contact: support@dyspatch.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import APIError from '../dyspatch-client/APIError';
import DraftRead from '../dyspatch-client/DraftRead';
import DraftsRead from '../dyspatch-client/DraftsRead';
import InlineObject from '../dyspatch-client/InlineObject';
import LocalizationKeyRead from '../dyspatch-client/LocalizationKeyRead';
import LocalizationMetaRead from '../dyspatch-client/LocalizationMetaRead';

/**
* Drafts service.
* @module dyspatch-client/DraftsApi
* @version 5.0.0
*/
export default class DraftsApi {

    /**
    * Constructs a new DraftsApi. 
    * @alias module:dyspatch-client/DraftsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteLocalization operation.
     * @callback module:dyspatch-client/DraftsApi~deleteLocalizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a localization
     * Deletes the localization with the given language ID if it exists
     * @param {String} draftId A draft ID
     * @param {String} languageId A language ID (eg: en-US)
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {module:dyspatch-client/DraftsApi~deleteLocalizationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteLocalization(draftId, languageId, accept, callback) {
      let postBody = null;
      // verify the required parameter 'draftId' is set
      if (draftId === undefined || draftId === null) {
        throw new Error("Missing the required parameter 'draftId' when calling deleteLocalization");
      }
      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw new Error("Missing the required parameter 'languageId' when calling deleteLocalization");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteLocalization");
      }

      let pathParams = {
        'draftId': draftId,
        'languageId': languageId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/drafts/{draftId}/localizations/{languageId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDraftById operation.
     * @callback module:dyspatch-client/DraftsApi~getDraftByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:dyspatch-client/DraftRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Draft by ID
     * Gets a draft object with the matching ID. The \"compiled\" field will contain the template in the default, unlocalized form.
     * @param {String} draftId A draft ID
     * @param {module:dyspatch-client/String} targetLanguage The type of templating language to compile as. Should only be used for visual templates.
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {module:dyspatch-client/DraftsApi~getDraftByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:dyspatch-client/DraftRead}
     */
    getDraftById(draftId, targetLanguage, accept, callback) {
      let postBody = null;
      // verify the required parameter 'draftId' is set
      if (draftId === undefined || draftId === null) {
        throw new Error("Missing the required parameter 'draftId' when calling getDraftById");
      }
      // verify the required parameter 'targetLanguage' is set
      if (targetLanguage === undefined || targetLanguage === null) {
        throw new Error("Missing the required parameter 'targetLanguage' when calling getDraftById");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getDraftById");
      }

      let pathParams = {
        'draftId': draftId
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
      let accepts = ['application/vnd.dyspatch.2020.04+json', '*/*'];
      let returnType = DraftRead;
      return this.apiClient.callApi(
        '/drafts/{draftId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDraftLocalizationKeys operation.
     * @callback module:dyspatch-client/DraftsApi~getDraftLocalizationKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:dyspatch-client/LocalizationKeyRead>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get localization keys
     * Returns the list of values that need to be translated for the draft. Set the `Accept` header to `application/vnd.dyspatch.2020.04+json` to get a JSON object, or `text/vnd.dyspatch.2020.04+x-gettext-translation` to get the POT file.
     * @param {String} draftId A draft ID
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {module:dyspatch-client/DraftsApi~getDraftLocalizationKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:dyspatch-client/LocalizationKeyRead>}
     */
    getDraftLocalizationKeys(draftId, accept, callback) {
      let postBody = null;
      // verify the required parameter 'draftId' is set
      if (draftId === undefined || draftId === null) {
        throw new Error("Missing the required parameter 'draftId' when calling getDraftLocalizationKeys");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getDraftLocalizationKeys");
      }

      let pathParams = {
        'draftId': draftId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/vnd.dyspatch.2020.04+json', 'text/vnd.dyspatch.2020.04+x-gettext-translation'];
      let returnType = [LocalizationKeyRead];
      return this.apiClient.callApi(
        '/drafts/{draftId}/localizationKeys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDrafts operation.
     * @callback module:dyspatch-client/DraftsApi~getDraftsCallback
     * @param {String} error Error message, if any.
     * @param {module:dyspatch-client/DraftsRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Drafts
     * Returns all drafts for your organization.
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor A cursor value used to retrieve a specific page from a paginated result set.
     * @param {module:dyspatch-client/String} opts.status Filter the list of drafts by a particular status
     * @param {module:dyspatch-client/DraftsApi~getDraftsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:dyspatch-client/DraftsRead}
     */
    getDrafts(accept, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getDrafts");
      }

      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor'],
        'status': opts['status']
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/vnd.dyspatch.2020.04+json', '*/*'];
      let returnType = DraftsRead;
      return this.apiClient.callApi(
        '/drafts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocalizationForDraft operation.
     * @callback module:dyspatch-client/DraftsApi~getLocalizationForDraftCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:dyspatch-client/LocalizationMetaRead>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get localizations on a draft
     * Returns localization metadata for the draft
     * @param {String} draftId A draft ID
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {module:dyspatch-client/DraftsApi~getLocalizationForDraftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:dyspatch-client/LocalizationMetaRead>}
     */
    getLocalizationForDraft(draftId, accept, callback) {
      let postBody = null;
      // verify the required parameter 'draftId' is set
      if (draftId === undefined || draftId === null) {
        throw new Error("Missing the required parameter 'draftId' when calling getLocalizationForDraft");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getLocalizationForDraft");
      }

      let pathParams = {
        'draftId': draftId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/vnd.dyspatch.2020.04+json'];
      let returnType = [LocalizationMetaRead];
      return this.apiClient.callApi(
        '/drafts/{draftId}/localizations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveLocalization operation.
     * @callback module:dyspatch-client/DraftsApi~saveLocalizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a localization
     * Inserts a localization or sets the name on an existing localization that already uses the languageId
     * @param {String} draftId A draft ID
     * @param {String} languageId A language ID (eg: en-US)
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {module:dyspatch-client/InlineObject} inlineObject 
     * @param {module:dyspatch-client/DraftsApi~saveLocalizationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    saveLocalization(draftId, languageId, accept, inlineObject, callback) {
      let postBody = inlineObject;
      // verify the required parameter 'draftId' is set
      if (draftId === undefined || draftId === null) {
        throw new Error("Missing the required parameter 'draftId' when calling saveLocalization");
      }
      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw new Error("Missing the required parameter 'languageId' when calling saveLocalization");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling saveLocalization");
      }
      // verify the required parameter 'inlineObject' is set
      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling saveLocalization");
      }

      let pathParams = {
        'draftId': draftId,
        'languageId': languageId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/drafts/{draftId}/localizations/{languageId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setTranslation operation.
     * @callback module:dyspatch-client/DraftsApi~setTranslationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set translations for language
     * Completely replaces any existing translations for the given language with those provided in request body. Variables embedded in keys or values are expected to be in the format `%(my_variable)s` and will automatically convert to the correct Dyspatch format depending on the type of template. Accepts key/value pairs in JSON format or in gettext PO file format. For JSON set `Content-Type` header to `application/json`. For gettext PO format set `Content-Type` header to `text/x-gettext-translation`.
     * @param {String} draftId A draft ID
     * @param {String} languageId A language ID (eg: en-US)
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {Object.<String, {String: String}>} requestBody 
     * @param {module:dyspatch-client/DraftsApi~setTranslationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setTranslation(draftId, languageId, accept, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'draftId' is set
      if (draftId === undefined || draftId === null) {
        throw new Error("Missing the required parameter 'draftId' when calling setTranslation");
      }
      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw new Error("Missing the required parameter 'languageId' when calling setTranslation");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling setTranslation");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling setTranslation");
      }

      let pathParams = {
        'draftId': draftId,
        'languageId': languageId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = null;
      return this.apiClient.callApi(
        '/drafts/{draftId}/localizations/{languageId}/translations', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitDraftForApproval operation.
     * @callback module:dyspatch-client/DraftsApi~submitDraftForApprovalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit the draft for approval
     * Moves the draft into submitted state.
     * @param {String} draftId A draft ID
     * @param {String} accept A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
     * @param {module:dyspatch-client/DraftsApi~submitDraftForApprovalCallback} callback The callback function, accepting three arguments: error, data, response
     */
    submitDraftForApproval(draftId, accept, callback) {
      let postBody = null;
      // verify the required parameter 'draftId' is set
      if (draftId === undefined || draftId === null) {
        throw new Error("Missing the required parameter 'draftId' when calling submitDraftForApproval");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling submitDraftForApproval");
      }

      let pathParams = {
        'draftId': draftId
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = null;
      return this.apiClient.callApi(
        '/drafts/{draftId}/publishRequest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
