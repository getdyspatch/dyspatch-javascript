# DyspatchClient.DraftsApi

All URIs are relative to *https://api.dyspatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**draftsDraftIdGet**](DraftsApi.md#draftsDraftIdGet) | **GET** /drafts/{draftId} | Get Draft by ID
[**draftsDraftIdLocalizationKeysGet**](DraftsApi.md#draftsDraftIdLocalizationKeysGet) | **GET** /drafts/{draftId}/localizationKeys | Get Localization Keys
[**draftsDraftIdLocalizationsGet**](DraftsApi.md#draftsDraftIdLocalizationsGet) | **GET** /drafts/{draftId}/localizations | Get Localizations on a Draft
[**draftsDraftIdLocalizationsLanguageIdDelete**](DraftsApi.md#draftsDraftIdLocalizationsLanguageIdDelete) | **DELETE** /drafts/{draftId}/localizations/{languageId} | Remove a Localization
[**draftsDraftIdLocalizationsLanguageIdPut**](DraftsApi.md#draftsDraftIdLocalizationsLanguageIdPut) | **PUT** /drafts/{draftId}/localizations/{languageId} | Create or Update a Localization
[**draftsDraftIdLocalizationsLanguageIdTranslationsPut**](DraftsApi.md#draftsDraftIdLocalizationsLanguageIdTranslationsPut) | **PUT** /drafts/{draftId}/localizations/{languageId}/translations | Set Translations for Language
[**draftsDraftIdPublishRequestPost**](DraftsApi.md#draftsDraftIdPublishRequestPost) | **POST** /drafts/{draftId}/publishRequest | Submit the Draft for Approval
[**draftsGet**](DraftsApi.md#draftsGet) | **GET** /drafts | List Drafts


<a name="draftsDraftIdGet"></a>
# **draftsDraftIdGet**
> DraftRead draftsDraftIdGet(draftId, targetLanguage)

Get Draft by ID

Gets a draft object with the matching ID. The \"compiled\" field will contain the unlocalized default template object.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var draftId = "draftId_example"; // String | A draft ID

var targetLanguage = "targetLanguage_example"; // String | The type of templating language to compile as. Should only be used for visual templates.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.draftsDraftIdGet(draftId, targetLanguage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **targetLanguage** | **String**| The type of templating language to compile as. Should only be used for visual templates. | 

### Return type

[**DraftRead**](DraftRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json

<a name="draftsDraftIdLocalizationKeysGet"></a>
# **draftsDraftIdLocalizationKeysGet**
> [LocalizationKeyRead] draftsDraftIdLocalizationKeysGet(draftId, , opts)

Get Localization Keys

Returns the list of values that need to be translated for the draft. Set the `Accept` header to `application/vnd.dyspatch.2019.10+json` to get a JSON object, or `text/vnd.dyspatch.2019.10+x-gettext-translation` to get the POT file.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var draftId = "draftId_example"; // String | A draft ID

var opts = { 
  'accept': "accept_example" // String | A version of the API that should be used for the request. For example, to use version \"2019.10\", set the value to \"application/vnd.dyspatch.2019.10+json\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.draftsDraftIdLocalizationKeysGet(draftId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \"2019.10\", set the value to \"application/vnd.dyspatch.2019.10+json\". | [optional] 

### Return type

[**[LocalizationKeyRead]**](LocalizationKeyRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json, text/vnd.dyspatch.2019.10+x-gettext-translation

<a name="draftsDraftIdLocalizationsGet"></a>
# **draftsDraftIdLocalizationsGet**
> [LocalizationMetaRead] draftsDraftIdLocalizationsGet(draftId, )

Get Localizations on a Draft

Returns localization metadata object for a template draft.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var draftId = "draftId_example"; // String | A draft ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.draftsDraftIdLocalizationsGet(draftId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 

### Return type

[**[LocalizationMetaRead]**](LocalizationMetaRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json

<a name="draftsDraftIdLocalizationsLanguageIdDelete"></a>
# **draftsDraftIdLocalizationsLanguageIdDelete**
> draftsDraftIdLocalizationsLanguageIdDelete(draftId, languageId)

Remove a Localization

Deletes the localization with the given `languageId` if it exists.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var draftId = "draftId_example"; // String | A draft ID

var languageId = "languageId_example"; // String | A language ID (eg: en-US)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.draftsDraftIdLocalizationsLanguageIdDelete(draftId, languageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **languageId** | **String**| A language ID (eg: en-US) | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json

<a name="draftsDraftIdLocalizationsLanguageIdPut"></a>
# **draftsDraftIdLocalizationsLanguageIdPut**
> draftsDraftIdLocalizationsLanguageIdPut(draftId, languageIdbody)

Create or Update a Localization

Inserts a localization or sets the name on an existing localization that already uses the `languageId`.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var draftId = "draftId_example"; // String | A draft ID

var languageId = "languageId_example"; // String | A language ID (eg: en-US)

var body = new DyspatchClient.Body(); // Body | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.draftsDraftIdLocalizationsLanguageIdPut(draftId, languageIdbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **languageId** | **String**| A language ID (eg: en-US) | 
 **body** | [**Body**](Body.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json

<a name="draftsDraftIdLocalizationsLanguageIdTranslationsPut"></a>
# **draftsDraftIdLocalizationsLanguageIdTranslationsPut**
> draftsDraftIdLocalizationsLanguageIdTranslationsPut(draftId, languageIdbody)

Set Translations for Language

Completely replaces any existing translations for the given language with those provided in request body. Variables embedded in keys or values are expected to be in the format `%(my_variable)s` and will automatically convert to the correct Dyspatch format depending on the type of template. Accepts key/value pairs in JSON format or in gettext PO file format. For JSON set `Content-Type` header to `application/json`. For gettext PO format set `Content-Type` header to `text/x-gettext-translation`.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var draftId = "draftId_example"; // String | A draft ID

var languageId = "languageId_example"; // String | A language ID (eg: en-US)

var body = null; // Object | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.draftsDraftIdLocalizationsLanguageIdTranslationsPut(draftId, languageIdbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **languageId** | **String**| A language ID (eg: en-US) | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json

<a name="draftsDraftIdPublishRequestPost"></a>
# **draftsDraftIdPublishRequestPost**
> draftsDraftIdPublishRequestPost(draftId, )

Submit the Draft for Approval

Moves the draft into [submitted and locked state](https://docs.dyspatch.io/templates/submitting_a_template/#awaiting-approval). This will allow your email stakeholders to review the template draft and provide feedback.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var draftId = "draftId_example"; // String | A draft ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.draftsDraftIdPublishRequestPost(draftId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json

<a name="draftsGet"></a>
# **draftsGet**
> DraftsRead draftsGet(opts)

List Drafts

Gets a list of all drafts for your oranization. Up to 25 results returned before results are paginated.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.DraftsApi();

var opts = { 
  'cursor': "cursor_example", // String | A cursor value used to retrieve a specific page from a paginated result set.
  'status': "status_example" // String | Filter the list of drafts by a particular status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.draftsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| A cursor value used to retrieve a specific page from a paginated result set. | [optional] 
 **status** | **String**| Filter the list of drafts by a particular status | [optional] 

### Return type

[**DraftsRead**](DraftsRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.10+json

