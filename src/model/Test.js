/**
 * HLS - Tests
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2017-06-20T13:31:11Z
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TestMarkers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TestMarkers'));
  } else {
    // Browser globals (root is window)
    if (!root.HlsTests) {
      root.HlsTests = {};
    }
    root.HlsTests.Test = factory(root.HlsTests.ApiClient, root.HlsTests.TestMarkers);
  }
}(this, function(ApiClient, TestMarkers) {
  'use strict';




  /**
   * The Test model module.
   * @module model/Test
   * @version 2017-06-20T13:31:11Z
   */

  /**
   * Constructs a new <code>Test</code>.
   * @alias module:model/Test
   * @class
   * @param name {String} 
   * @param description {String} 
   * @param channels {Object} Labeled data channels that relate to the test.
   */
  var exports = function(name, description, channels) {
    var _this = this;

    _this['name'] = name;
    _this['description'] = description;
    _this['channels'] = channels;



  };

  /**
   * Constructs a <code>Test</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Test} obj Optional instance to populate.
   * @return {module:model/Test} The populated <code>Test</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], Object);
      }
      if (data.hasOwnProperty('range')) {
        obj['range'] = ApiClient.convertToType(data['range'], ['Number']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], Object);
      }
      if (data.hasOwnProperty('markers')) {
        obj['markers'] = ApiClient.convertToType(data['markers'], [TestMarkers]);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Labeled data channels that relate to the test.
   * @member {Object} channels
   */
  exports.prototype['channels'] = undefined;
  /**
   * @member {Array.<Number>} range
   */
  exports.prototype['range'] = undefined;
  /**
   * @member {Object} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {Array.<module:model/TestMarkers>} markers
   */
  exports.prototype['markers'] = undefined;



  return exports;
}));


