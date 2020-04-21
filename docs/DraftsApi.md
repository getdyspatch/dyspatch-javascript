# DyspatchClient.DraftsApi

All URIs are relative to *https://api.dyspatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLocalization**](DraftsApi.md#deleteLocalization) | **DELETE** /drafts/{draftId}/localizations/{languageId} | Remove a localization
[**getDraftById**](DraftsApi.md#getDraftById) | **GET** /drafts/{draftId} | Get Draft by ID
[**getDraftLocalizationKeys**](DraftsApi.md#getDraftLocalizationKeys) | **GET** /drafts/{draftId}/localizationKeys | Get localization keys
[**getDrafts**](DraftsApi.md#getDrafts) | **GET** /drafts | List Drafts
[**getLocalizationForDraft**](DraftsApi.md#getLocalizationForDraft) | **GET** /drafts/{draftId}/localizations | Get localizations on a draft
[**saveLocalization**](DraftsApi.md#saveLocalization) | **PUT** /drafts/{draftId}/localizations/{languageId} | Create or update a localization
[**setTranslation**](DraftsApi.md#setTranslation) | **PUT** /drafts/{draftId}/localizations/{languageId}/translations | Set translations for language
[**submitDraftForApproval**](DraftsApi.md#submitDraftForApproval) | **POST** /drafts/{draftId}/publishRequest | Submit the draft for approval



## deleteLocalization

> deleteLocalization(draftId, languageId, accept)

Remove a localization

Deletes the localization with the given language ID if it exists

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let draftId = "draftId_example"; // String | A draft ID
let languageId = "languageId_example"; // String | A language ID (eg: en-US)
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
apiInstance.deleteLocalization(draftId, languageId, accept, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **languageId** | **String**| A language ID (eg: en-US) | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getDraftById

> DraftRead getDraftById(draftId, targetLanguage, accept)

Get Draft by ID

Gets a draft object with the matching ID. The \&quot;compiled\&quot; field will contain the template in the default, unlocalized form.

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let draftId = "draftId_example"; // String | A draft ID
let targetLanguage = "targetLanguage_example"; // String | The type of templating language to compile as. Should only be used for visual templates.
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
apiInstance.getDraftById(draftId, targetLanguage, accept, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **targetLanguage** | **String**| The type of templating language to compile as. Should only be used for visual templates. | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 

### Return type

[**DraftRead**](DraftRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.04+json, */*


## getDraftLocalizationKeys

> [LocalizationKeyRead] getDraftLocalizationKeys(draftId, accept)

Get localization keys

Returns the list of values that need to be translated for the draft. Set the &#x60;Accept&#x60; header to &#x60;application/vnd.dyspatch.2020.04+json&#x60; to get a JSON object, or &#x60;text/vnd.dyspatch.2020.04+x-gettext-translation&#x60; to get the POT file.

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let draftId = "draftId_example"; // String | A draft ID
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
apiInstance.getDraftLocalizationKeys(draftId, accept, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 

### Return type

[**[LocalizationKeyRead]**](LocalizationKeyRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.04+json, text/vnd.dyspatch.2020.04+x-gettext-translation


## getDrafts

> DraftsRead getDrafts(accept, opts)

List Drafts

Returns all drafts for your organization.

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
let opts = {
  'cursor': "cursor_example", // String | A cursor value used to retrieve a specific page from a paginated result set.
  'status': "status_example" // String | Filter the list of drafts by a particular status
};
apiInstance.getDrafts(accept, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 
 **cursor** | **String**| A cursor value used to retrieve a specific page from a paginated result set. | [optional] 
 **status** | **String**| Filter the list of drafts by a particular status | [optional] 

### Return type

[**DraftsRead**](DraftsRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.04+json, */*


## getLocalizationForDraft

> [LocalizationMetaRead] getLocalizationForDraft(draftId, accept)

Get localizations on a draft

Returns localization metadata for the draft

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let draftId = "draftId_example"; // String | A draft ID
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
apiInstance.getLocalizationForDraft(draftId, accept, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 

### Return type

[**[LocalizationMetaRead]**](LocalizationMetaRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.04+json


## saveLocalization

> saveLocalization(draftId, languageId, accept, inlineObject)

Create or update a localization

Inserts a localization or sets the name on an existing localization that already uses the languageId

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let draftId = "draftId_example"; // String | A draft ID
let languageId = "languageId_example"; // String | A language ID (eg: en-US)
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
let inlineObject = new DyspatchClient.InlineObject(); // InlineObject | 
apiInstance.saveLocalization(draftId, languageId, accept, inlineObject, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **languageId** | **String**| A language ID (eg: en-US) | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setTranslation

> setTranslation(draftId, languageId, accept, requestBody)

Set translations for language

Completely replaces any existing translations for the given language with those provided in request body. Variables embedded in keys or values are expected to be in the format &#x60;%(my_variable)s&#x60; and will automatically convert to the correct Dyspatch format depending on the type of template. Accepts key/value pairs in JSON format or in gettext PO file format. For JSON set &#x60;Content-Type&#x60; header to &#x60;application/json&#x60;. For gettext PO format set &#x60;Content-Type&#x60; header to &#x60;text/x-gettext-translation&#x60;.

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let draftId = "draftId_example"; // String | A draft ID
let languageId = "languageId_example"; // String | A language ID (eg: en-US)
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.setTranslation(draftId, languageId, accept, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **languageId** | **String**| A language ID (eg: en-US) | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## submitDraftForApproval

> submitDraftForApproval(draftId, accept)

Submit the draft for approval

Moves the draft into submitted state.

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.DraftsApi();
let draftId = "draftId_example"; // String | A draft ID
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
apiInstance.submitDraftForApproval(draftId, accept, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

