# DyspatchClient.TemplatesApi

All URIs are relative to *https://api.dyspatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTemplateById**](TemplatesApi.md#getTemplateById) | **GET** /templates/{templateId} | Get Template by ID
[**getTemplates**](TemplatesApi.md#getTemplates) | **GET** /templates | List Templates



## getTemplateById

> TemplateRead getTemplateById(templateId, targetLanguage, accept)

Get Template by ID

Gets a template object with the matching ID. If the template has published content the \&quot;compiled\&quot; field will contain the template .

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.TemplatesApi();
let templateId = "templateId_example"; // String | A template ID
let targetLanguage = "targetLanguage_example"; // String | The type of templating language to compile as. Should only be used for visual templates.
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
apiInstance.getTemplateById(templateId, targetLanguage, accept, (error, data, response) => {
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
 **templateId** | **String**| A template ID | 
 **targetLanguage** | **String**| The type of templating language to compile as. Should only be used for visual templates. | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2020.04\&quot;, set the value to \&quot;application/vnd.dyspatch.2020.04+json\&quot; | 

### Return type

[**TemplateRead**](TemplateRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.04+json, */*


## getTemplates

> TemplatesRead getTemplates(accept, opts)

List Templates

Gets a list of Template Metadata objects for all templates. Up to 25 results returned before results are paginated.

### Example

```javascript
import DyspatchClient from 'dyspatch-client';
let defaultClient = DyspatchClient.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DyspatchClient.TemplatesApi();
let accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2020.04\", set the value to \"application/vnd.dyspatch.2020.04+json\"
let opts = {
  'cursor': "cursor_example" // String | A cursor value used to retrieve a specific page from a paginated result set.
};
apiInstance.getTemplates(accept, opts, (error, data, response) => {
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

### Return type

[**TemplatesRead**](TemplatesRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.dyspatch.2020.04+json, */*

