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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'dyspatch-client/Cursor', 'dyspatch-client/TemplateMetaRead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cursor'), require('./TemplateMetaRead'));
  } else {
    // Browser globals (root is window)
    if (!root.DyspatchClient) {
      root.DyspatchClient = {};
    }
    root.DyspatchClient.TemplatesRead = factory(root.DyspatchClient.ApiClient, root.DyspatchClient.Cursor, root.DyspatchClient.TemplateMetaRead);
  }
}(this, function(ApiClient, Cursor, TemplateMetaRead) {
  'use strict';




  /**
   * The TemplatesRead model module.
   * @module dyspatch-client/TemplatesRead
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TemplatesRead</code>.
   * @alias module:dyspatch-client/TemplatesRead
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TemplatesRead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:dyspatch-client/TemplatesRead} obj Optional instance to populate.
   * @return {module:dyspatch-client/TemplatesRead} The populated <code>TemplatesRead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cursor')) {
        obj['cursor'] = Cursor.constructFromObject(data['cursor']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [TemplateMetaRead]);
      }
    }
    return obj;
  }

  /**
   * @member {module:dyspatch-client/Cursor} cursor
   */
  exports.prototype['cursor'] = undefined;
  /**
   * A list of template metadata objects
   * @member {Array.<module:dyspatch-client/TemplateMetaRead>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


