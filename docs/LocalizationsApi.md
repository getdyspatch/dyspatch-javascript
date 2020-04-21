# DyspatchClient.LocalizationsApi

All URIs are relative to *https://api.dyspatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLocalizationById**](LocalizationsApi.md#getLocalizationById) | **GET** /localizations/{localizationId} | Get Localization Object by ID



## getLocalizationById

> LocalizationRead getLocalizationById(localizationId, targetLanguage, accept)

Get Localization Object by ID

Returns a specific localization object with a matching ID

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
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
apiInstance.getLocalizationById(localizationId, targetLanguage, accept, (error, data, response) => {
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
 **localizationId** | **String**| A localization ID | 
 **targetLanguage** | **String**| The type of templating language to compile as. Should only be used for visual templates. | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 

### Return type

[**LocalizationRead**](LocalizationRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.04+json, */*

