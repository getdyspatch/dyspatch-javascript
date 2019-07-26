/**
 * Dyspatch API
 * # Introduction  The Dyspatch API is based on the REST paradigm, and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs, and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch. 
 *
 * OpenAPI spec version: 2019.03
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'dyspatch-client/APIError', 'dyspatch-client/CompiledRead', 'dyspatch-client/CreatedAt', 'dyspatch-client/Cursor', 'dyspatch-client/LanguageId', 'dyspatch-client/LocalizationId', 'dyspatch-client/LocalizationMetaRead', 'dyspatch-client/LocalizationName', 'dyspatch-client/LocalizationRead', 'dyspatch-client/LocalizationUrl', 'dyspatch-client/TemplateDescription', 'dyspatch-client/TemplateId', 'dyspatch-client/TemplateMetaRead', 'dyspatch-client/TemplateName', 'dyspatch-client/TemplateRead', 'dyspatch-client/TemplateUrl', 'dyspatch-client/TemplatesRead', 'dyspatch-client/UpdatedAt', 'dyspatch-client/LocalizationsApi', 'dyspatch-client/TemplatesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./dyspatch-client/APIError'), require('./dyspatch-client/CompiledRead'), require('./dyspatch-client/CreatedAt'), require('./dyspatch-client/Cursor'), require('./dyspatch-client/LanguageId'), require('./dyspatch-client/LocalizationId'), require('./dyspatch-client/LocalizationMetaRead'), require('./dyspatch-client/LocalizationName'), require('./dyspatch-client/LocalizationRead'), require('./dyspatch-client/LocalizationUrl'), require('./dyspatch-client/TemplateDescription'), require('./dyspatch-client/TemplateId'), require('./dyspatch-client/TemplateMetaRead'), require('./dyspatch-client/TemplateName'), require('./dyspatch-client/TemplateRead'), require('./dyspatch-client/TemplateUrl'), require('./dyspatch-client/TemplatesRead'), require('./dyspatch-client/UpdatedAt'), require('./dyspatch-client/LocalizationsApi'), require('./dyspatch-client/TemplatesApi'));
  }
}(function(ApiClient, APIError, CompiledRead, CreatedAt, Cursor, LanguageId, LocalizationId, LocalizationMetaRead, LocalizationName, LocalizationRead, LocalizationUrl, TemplateDescription, TemplateId, TemplateMetaRead, TemplateName, TemplateRead, TemplateUrl, TemplatesRead, UpdatedAt, LocalizationsApi, TemplatesApi) {
  'use strict';

  /**
   * _IntroductionThe_Dyspatch_API_is_based_on_the_REST_paradigm_and_features_resource_based_URLs_with_standard_HTTP_responsecodes_to_indicate_errors__We_use_standard_HTTP_authentication_and_request_verbs_and_all_responses_are_JSON_formatted_See_our__Implementation_Guide_httpsdocs_dyspatch_iodevelopmentimplementing_dyspatch_for_more_details_onhow_to_implement_Dyspatch_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DyspatchClient = require('index'); // See note below*.
   * var xxxSvc = new DyspatchClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DyspatchClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new DyspatchClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DyspatchClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The APIError model constructor.
     * @property {module:dyspatch-client/APIError}
     */
    APIError: APIError,
    /**
     * The CompiledRead model constructor.
     * @property {module:dyspatch-client/CompiledRead}
     */
    CompiledRead: CompiledRead,
    /**
     * The CreatedAt model constructor.
     * @property {module:dyspatch-client/CreatedAt}
     */
    CreatedAt: CreatedAt,
    /**
     * The Cursor model constructor.
     * @property {module:dyspatch-client/Cursor}
     */
    Cursor: Cursor,
    /**
     * The LanguageId model constructor.
     * @property {module:dyspatch-client/LanguageId}
     */
    LanguageId: LanguageId,
    /**
     * The LocalizationId model constructor.
     * @property {module:dyspatch-client/LocalizationId}
     */
    LocalizationId: LocalizationId,
    /**
     * The LocalizationMetaRead model constructor.
     * @property {module:dyspatch-client/LocalizationMetaRead}
     */
    LocalizationMetaRead: LocalizationMetaRead,
    /**
     * The LocalizationName model constructor.
     * @property {module:dyspatch-client/LocalizationName}
     */
    LocalizationName: LocalizationName,
    /**
     * The LocalizationRead model constructor.
     * @property {module:dyspatch-client/LocalizationRead}
     */
    LocalizationRead: LocalizationRead,
    /**
     * The LocalizationUrl model constructor.
     * @property {module:dyspatch-client/LocalizationUrl}
     */
    LocalizationUrl: LocalizationUrl,
    /**
     * The TemplateDescription model constructor.
     * @property {module:dyspatch-client/TemplateDescription}
     */
    TemplateDescription: TemplateDescription,
    /**
     * The TemplateId model constructor.
     * @property {module:dyspatch-client/TemplateId}
     */
    TemplateId: TemplateId,
    /**
     * The TemplateMetaRead model constructor.
     * @property {module:dyspatch-client/TemplateMetaRead}
     */
    TemplateMetaRead: TemplateMetaRead,
    /**
     * The TemplateName model constructor.
     * @property {module:dyspatch-client/TemplateName}
     */
    TemplateName: TemplateName,
    /**
     * The TemplateRead model constructor.
     * @property {module:dyspatch-client/TemplateRead}
     */
    TemplateRead: TemplateRead,
    /**
     * The TemplateUrl model constructor.
     * @property {module:dyspatch-client/TemplateUrl}
     */
    TemplateUrl: TemplateUrl,
    /**
     * The TemplatesRead model constructor.
     * @property {module:dyspatch-client/TemplatesRead}
     */
    TemplatesRead: TemplatesRead,
    /**
     * The UpdatedAt model constructor.
     * @property {module:dyspatch-client/UpdatedAt}
     */
    UpdatedAt: UpdatedAt,
    /**
     * The LocalizationsApi service constructor.
     * @property {module:dyspatch-client/LocalizationsApi}
     */
    LocalizationsApi: LocalizationsApi,
    /**
     * The TemplatesApi service constructor.
     * @property {module:dyspatch-client/TemplatesApi}
     */
    TemplatesApi: TemplatesApi
  };

  return exports;
}));
