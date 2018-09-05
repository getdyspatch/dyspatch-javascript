# DyspatchClient.TemplatesApi

All URIs are relative to *https://api.dyspatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templatesGet**](TemplatesApi.md#templatesGet) | **GET** /templates | List Templates
[**templatesTemplateIdGet**](TemplatesApi.md#templatesTemplateIdGet) | **GET** /templates/{templateId} | Get Template by ID


<a name="templatesGet"></a>
# **templatesGet**
> TemplatesRead templatesGet(accept, opts)

List Templates

Gets a list of Template Metadata objects for all templates. Up to 25 results returned before results are paginated.

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.TemplatesApi();

var accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2018.08\", set the value to \"application/vnd.dyspatch.2018.08+json\"

var opts = { 
  'cursor': "cursor_example" // String | A cursor value used to retrieve a specific page from a paginated result set.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatesGet(accept, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2018.08\&quot;, set the value to \&quot;application/vnd.dyspatch.2018.08+json\&quot; | 
 **cursor** | **String**| A cursor value used to retrieve a specific page from a paginated result set. | [optional] 

### Return type

[**TemplatesRead**](TemplatesRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2018.08+json

<a name="templatesTemplateIdGet"></a>
# **templatesTemplateIdGet**
> TemplateRead templatesTemplateIdGet(templateId, accept)

Get Template by ID

Gets a template object with the matching ID. If the template has published content the \&quot;compiled\&quot; field will contain the template .

### Example
```javascript
var DyspatchClient = require('dyspatch-client');
var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new DyspatchClient.TemplatesApi();

var templateId = "templateId_example"; // String | A template ID

var accept = "accept_example"; // String | A version of the API that should be used for the request. For example, to use version \"2018.08\", set the value to \"application/vnd.dyspatch.2018.08+json\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatesTemplateIdGet(templateId, accept, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| A template ID | 
 **accept** | **String**| A version of the API that should be used for the request. For example, to use version \&quot;2018.08\&quot;, set the value to \&quot;application/vnd.dyspatch.2018.08+json\&quot; | 

### Return type

[**TemplateRead**](TemplateRead.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.dyspatch.2018.08+json

