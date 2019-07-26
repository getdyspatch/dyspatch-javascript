# DyspatchClient.LocalizationsApi

All URIs are relative to *https://api.dyspatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**localizationsLocalizationIdGet**](LocalizationsApi.md#localizationsLocalizationIdGet) | **GET** /localizations/{localizationId} | Get Localization Object by ID


<a name="localizationsLocalizationIdGet"></a>
# **localizationsLocalizationIdGet**
> LocalizationRead localizationsLocalizationIdGet(localizationId, targetLanguage, accept)

Get Localization Object by ID

Returns a specific localization object with a matching ID

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.LocalizationsApi();

var localizationId = "localizationId_example"; // String | A localization ID

var targetLanguage = "targetLanguage_example"; // String | The type of templating language to compile as. Should only be used for visual templates.

var accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2019.03\", set the value to \"application/vnd.dyspatch.2019.03+json\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.localizationsLocalizationIdGet(localizationId, targetLanguage, accept, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **localizationId** | **String**| A localization ID | 
 **targetLanguage** | **String**| The type of templating language to compile as. Should only be used for visual templates. | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2019.03\&quot;, set the value to \&quot;application/vnd.dyspatch.2019.03+json\&quot; | 

### Return type

[**LocalizationRead**](LocalizationRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2019.03+json

