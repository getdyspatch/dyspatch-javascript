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
import Cursor from './Cursor';
import TemplateMetaRead from './TemplateMetaRead';

/**
 * The TemplatesRead model module.
 * @module dyspatch-client/TemplatesRead
 * @version 5.0.0
 */
class TemplatesRead {
    /**
     * Constructs a new <code>TemplatesRead</code>.
     * list of template metadata
     * @alias module:dyspatch-client/TemplatesRead
     */
    constructor() { 
        
        TemplatesRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplatesRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dyspatch-client/TemplatesRead} obj Optional instance to populate.
     * @return {module:dyspatch-client/TemplatesRead} The populated <code>TemplatesRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplatesRead();

            if (data.hasOwnProperty('cursor')) {
                obj['cursor'] = Cursor.constructFromObject(data['cursor']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TemplateMetaRead]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:dyspatch-client/Cursor} cursor
 */
TemplatesRead.prototype['cursor'] = undefined;

/**
 * A list of template metadata objects
 * @member {Array.<module:dyspatch-client/TemplateMetaRead>} data
 */
TemplatesRead.prototype['data'] = undefined;






export default TemplatesRead;

