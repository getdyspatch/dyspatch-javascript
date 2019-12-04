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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DyspatchClient) {
      root.DyspatchClient = {};
    }
    root.DyspatchClient.APIError = factory(root.DyspatchClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIError model module.
   * @module dyspatch-client/APIError
   * @version 3.0.1
   */

  /**
   * Constructs a new <code>APIError</code>.
   * @alias module:dyspatch-client/APIError
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>APIError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:dyspatch-client/APIError} obj Optional instance to populate.
   * @return {module:dyspatch-client/APIError} The populated <code>APIError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('parameter')) {
        obj['parameter'] = ApiClient.convertToType(data['parameter'], 'String');
      }
    }
    return obj;
  }

  /**
   * Error code:   * server_error - Internal server error.   * invalid_parameter - Validation error, parameter will contain invalid field and message will contain the reason.   * invalid_body - Body could not be parsed, message will contain the reason.   * invalid_request - Validation error, the protocol used to make the request was not https.   * unauthorized - Credentials were found but permissions were not sufficient.   * unauthenticated - Credentials were not found or were not valid.   * not_found - The requested resource was not found.   * rate_limited - The request was refused because a rate limit was exceeded. There is an account wide rate limit of 3600 requests per-minute, although that is subject to change. The current remaining rate limit can be viewed by checking the X-Ratelimit-Remaining header. 
   * @member {module:dyspatch-client/APIError.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Human readable error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The invalid parameter, if 'code' is invalid_parameter
   * @member {String} parameter
   */
  exports.prototype['parameter'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "server_error"
     * @const
     */
    "server_error": "server_error",
    /**
     * value: "invalid_parameter"
     * @const
     */
    "invalid_parameter": "invalid_parameter",
    /**
     * value: "invalid_body"
     * @const
     */
    "invalid_body": "invalid_body",
    /**
     * value: "invalid_request"
     * @const
     */
    "invalid_request": "invalid_request",
    /**
     * value: "unauthorized"
     * @const
     */
    "unauthorized": "unauthorized",
    /**
     * value: "unauthenticated"
     * @const
     */
    "unauthenticated": "unauthenticated",
    /**
     * value: "not_found"
     * @const
     */
    "not_found": "not_found",
    /**
     * value: "rate_limited"
     * @const
     */
    "rate_limited": "rate_limited"  };


  return exports;
}));


