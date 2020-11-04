/**
 * Dyspatch API
 * # Introduction  The Dyspatch API is based on the REST paradigm, and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs, and all responses are JSON formatted. See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch.  ## API Client Libraries Dyspatch provides API Clients for popular languages and web frameworks.  - [Java](https://github.com/getdyspatch/dyspatch-java) - [Javascript](https://github.com/getdyspatch/dyspatch-javascript) - [Python](https://github.com/getdyspatch/dyspatch-python) - [C#](https://github.com/getdyspatch/dyspatch-dotnet) - [Go](https://github.com/getdyspatch/dyspatch-golang) - [Ruby](https://github.com/getdyspatch/dyspatch-ruby) 
 *
 * The version of the OpenAPI document: 2020.08
 * Contact: support@dyspatch.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CompiledRead model module.
 * @module dyspatch-client/CompiledRead
 * @version 6.0.0
 */
class CompiledRead {
    /**
     * Constructs a new <code>CompiledRead</code>.
     * revision data
     * @alias module:dyspatch-client/CompiledRead
     */
    constructor() { 
        
        CompiledRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompiledRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dyspatch-client/CompiledRead} obj Optional instance to populate.
     * @return {module:dyspatch-client/CompiledRead} The populated <code>CompiledRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompiledRead();

            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('replyTo')) {
                obj['replyTo'] = ApiClient.convertToType(data['replyTo'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'Blob');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'Blob');
            }
            if (data.hasOwnProperty('ampHtml')) {
                obj['ampHtml'] = ApiClient.convertToType(data['ampHtml'], 'Blob');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'Blob');
            }
        }
        return obj;
    }


}

/**
 * Sender address
 * @member {String} sender
 */
CompiledRead.prototype['sender'] = undefined;

/**
 * Reply-To address
 * @member {String} replyTo
 */
CompiledRead.prototype['replyTo'] = undefined;

/**
 * Base64 encoded template subject line
 * @member {Blob} subject
 */
CompiledRead.prototype['subject'] = undefined;

/**
 * Base64 encoded template HTML body
 * @member {Blob} html
 */
CompiledRead.prototype['html'] = undefined;

/**
 * Base64 encoded amp version of template body
 * @member {Blob} ampHtml
 */
CompiledRead.prototype['ampHtml'] = undefined;

/**
 * Base64 encoded template text body
 * @member {Blob} text
 */
CompiledRead.prototype['text'] = undefined;






export default CompiledRead;

