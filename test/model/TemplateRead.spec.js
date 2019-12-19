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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DyspatchClient);
  }
}(this, function(expect, DyspatchClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DyspatchClient.TemplateRead();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TemplateRead', function() {
    it('should create an instance of TemplateRead', function() {
      // uncomment below and update the code to test TemplateRead
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be.a(DyspatchClient.TemplateRead);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

    it('should have the property compiled (base name: "compiled")', function() {
      // uncomment below and update the code to test the property compiled
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

    it('should have the property localizations (base name: "localizations")', function() {
      // uncomment below and update the code to test the property localizations
      //var instane = new DyspatchClient.TemplateRead();
      //expect(instance).to.be();
    });

  });

}));