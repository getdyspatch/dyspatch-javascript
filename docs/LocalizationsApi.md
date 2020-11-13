# DyspatchClient.LocalizationsApi

All URIs are relative to *https://api.dyspatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDraftLocalizationById**](LocalizationsApi.md#getDraftLocalizationById) | **GET** /localizations/{localizationId}/drafts/{draftId} | Get Draft Localization Object by ID
[**getPublishedLocalizationById**](LocalizationsApi.md#getPublishedLocalizationById) | **GET** /localizations/{localizationId} | Get Localization Object by ID



## getDraftLocalizationById

> LocalizationRead getDraftLocalizationById(draftId, localizationId, targetLanguage, accept)

Get Draft Localization Object by ID

Returns a specific localization object of the matching draft with a matching localization ID

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.LocalizationsApi();
let draftId = "draftId_example"; // String | A draft ID
let localizationId = "localizationId_example"; // String | A localization ID
let targetLanguage = "targetLanguage_example"; // String | The type of templating language to compile as. Should only be used for visual templates.
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.11\", set the value to \"application/vnd.dyspatch.2020.11+json\"
apiInstance.getDraftLocalizationById(draftId, localizationId, targetLanguage, accept).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftId** | **String**| A draft ID | 
 **localizationId** | **String**| A localization ID | 
 **targetLanguage** | **String**| The type of templating language to compile as. Should only be used for visual templates. | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.11\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.11+json\&quot; | 

### Return type

[**LocalizationRead**](LocalizationRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.11+json, */*


## getPublishedLocalizationById

> LocalizationRead getPublishedLocalizationById(localizationId, targetLanguage, accept)

Get Localization Object by ID

Returns the published content associated with the localization of the matching ID

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.LocalizationsApi();
let localizationId = "localizationId_example"; // String | A localization ID
let targetLanguage = "targetLanguage_example"; // String | The type of templating language to compile as. Should only be used for visual templates.
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.11\", set the value to \"application/vnd.dyspatch.2020.11+json\"
apiInstance.getPublishedLocalizationById(localizationId, targetLanguage, accept).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **localizationId** | **String**| A localization ID | 
 **targetLanguage** | **String**| The type of templating language to compile as. Should only be used for visual templates. | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.11\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.11+json\&quot; | 

### Return type

[**LocalizationRead**](LocalizationRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.11+json, */*

