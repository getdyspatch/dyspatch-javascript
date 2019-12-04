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
    root.DyspatchClient.LocalizationKeyRead = factory(root.DyspatchClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LocalizationKeyRead model module.
   * @module dyspatch-client/LocalizationKeyRead
   * @version 3.0.1
   */

  /**
   * Constructs a new <code>LocalizationKeyRead</code>.
   * @alias module:dyspatch-client/LocalizationKeyRead
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>LocalizationKeyRead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:dyspatch-client/LocalizationKeyRead} obj Optional instance to populate.
   * @return {module:dyspatch-client/LocalizationKeyRead} The populated <code>LocalizationKeyRead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;



  return exports;
}));


