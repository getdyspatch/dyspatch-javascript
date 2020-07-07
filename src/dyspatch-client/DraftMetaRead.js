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

/**
 * The DraftMetaRead model module.
 * @module dyspatch-client/DraftMetaRead
 * @version 5.0.1
 */
class DraftMetaRead {
    /**
     * Constructs a new <code>DraftMetaRead</code>.
     * draft metadata
     * @alias module:dyspatch-client/DraftMetaRead
     */
    constructor() { 
        
        DraftMetaRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DraftMetaRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dyspatch-client/DraftMetaRead} obj Optional instance to populate.
     * @return {module:dyspatch-client/DraftMetaRead} The populated <code>DraftMetaRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DraftMetaRead();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * An opaque, unique identifier for a draft
 * @member {String} id
 */
DraftMetaRead.prototype['id'] = undefined;

/**
 * An opaque, unique identifier for a template
 * @member {String} templateId
 */
DraftMetaRead.prototype['templateId'] = undefined;

/**
 * The name of a draft
 * @member {String} name
 */
DraftMetaRead.prototype['name'] = undefined;

/**
 * The API url for a specific draft
 * @member {String} url
 */
DraftMetaRead.prototype['url'] = undefined;

/**
 * The time of initial creation
 * @member {Date} createdAt
 */
DraftMetaRead.prototype['createdAt'] = undefined;

/**
 * The time of last update
 * @member {Date} updatedAt
 */
DraftMetaRead.prototype['updatedAt'] = undefined;






export default DraftMetaRead;

