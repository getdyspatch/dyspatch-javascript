/*
 * Dyspatch API
 * # Introduction  The Dyspatch API is based on the REST paradigm and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch.
 *
 * OpenAPI spec version: 2019.10
 * Contact: support@dyspatch.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DyspatchClient);
  }
}(this, function(expect, DyspatchClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DraftsRead', function() {
      beforeEach(function() {
        instance = new DyspatchClient.DraftsRead();
      });

      it('should create an instance of DraftsRead', function() {
        // TODO: update the code to test DraftsRead
        expect(instance).to.be.a(DyspatchClient.DraftsRead);
      });

      it('should have the property cursor (base name: "cursor")', function() {
        // TODO: update the code to test the property cursor
        expect(instance).to.have.property('cursor');
        // expect(instance.cursor).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

    });
  });

}));
