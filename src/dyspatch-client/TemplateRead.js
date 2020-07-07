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

import ApiClient from '../ApiClient';
import CompiledRead from './CompiledRead';
import LocalizationMetaRead from './LocalizationMetaRead';

/**
 * The TemplateRead model module.
 * @module dyspatch-client/TemplateRead
 * @version 5.0.1
 */
class TemplateRead {
    /**
     * Constructs a new <code>TemplateRead</code>.
     * list of template metadata
     * @alias module:dyspatch-client/TemplateRead
     */
    constructor() { 
        
        TemplateRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dyspatch-client/TemplateRead} obj Optional instance to populate.
     * @return {module:dyspatch-client/TemplateRead} The populated <code>TemplateRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateRead();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('compiled')) {
                obj['compiled'] = CompiledRead.constructFromObject(data['compiled']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('localizations')) {
                obj['localizations'] = ApiClient.convertToType(data['localizations'], [LocalizationMetaRead]);
            }
        }
        return obj;
    }


}

/**
 * An opaque, unique identifier for a template
 * @member {String} id
 */
TemplateRead.prototype['id'] = undefined;

/**
 * The name of a template
 * @member {String} name
 */
TemplateRead.prototype['name'] = undefined;

/**
 * A description of the template
 * @member {String} description
 */
TemplateRead.prototype['description'] = undefined;

/**
 * The API url for a specific template
 * @member {String} url
 */
TemplateRead.prototype['url'] = undefined;

/**
 * @member {module:dyspatch-client/CompiledRead} compiled
 */
TemplateRead.prototype['compiled'] = undefined;

/**
 * The time of initial creation
 * @member {Date} createdAt
 */
TemplateRead.prototype['createdAt'] = undefined;

/**
 * The time of last update
 * @member {Date} updatedAt
 */
TemplateRead.prototype['updatedAt'] = undefined;

/**
 * A list of the Template's available localizations
 * @member {Array.<module:dyspatch-client/LocalizationMetaRead>} localizations
 */
TemplateRead.prototype['localizations'] = undefined;






export default TemplateRead;

