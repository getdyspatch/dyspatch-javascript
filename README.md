# Dyspatch Javascript API Client

## Introduction

The Dyspatch API is based on the REST paradigm and features resource based URLs with standard HTTP response codes to indicate errors. We use standard HTTP authentication and request verbs, and all responses are JSON formatted.

See our [Implementation Guide](https://docs.dyspatch.io/development/implementing_dyspatch/) for more details on how to implement Dyspatch.

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2019.10
- Package version: 4.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
  For more information, please visit [https://docs.dyspatch.io](https://docs.dyspatch.io)

## Installation

### For [Node.js](https://nodejs.org/)

#### Installing via NPM

```shell
npm install dyspatch-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your dyspatch-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('dyspatch-client')` in javascript files from the directory you ran the last command above from.

#### git

If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DyspatchClient = require('dyspatch-client');

var defaultClient = DyspatchClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new DyspatchClient.DraftsApi()

var draftId = "draftId_example"; // {String} A draft ID

var targetLanguage = "targetLanguage_example"; // {String} The type of templating language to compile as. Should only be used for visual templates.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.draftsDraftIdGet(draftId, targetLanguage, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.dyspatch.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DyspatchClient.DraftsApi* | [**deleteLocalization**](docs/DraftsApi.md#deleteLocalization) | **DELETE** /drafts/{draftId}/localizations/{languageId} | Remove a localization
*DyspatchClient.DraftsApi* | [**getDraftById**](docs/DraftsApi.md#getDraftById) | **GET** /drafts/{draftId} | Get Draft by ID
*DyspatchClient.DraftsApi* | [**getDraftLocalizationKeys**](docs/DraftsApi.md#getDraftLocalizationKeys) | **GET** /drafts/{draftId}/localizationKeys | Get localization keys
*DyspatchClient.DraftsApi* | [**getDrafts**](docs/DraftsApi.md#getDrafts) | **GET** /drafts | List Drafts
*DyspatchClient.DraftsApi* | [**getLocalizationForDraft**](docs/DraftsApi.md#getLocalizationForDraft) | **GET** /drafts/{draftId}/localizations | Get localizations on a draft
*DyspatchClient.DraftsApi* | [**saveLocalization**](docs/DraftsApi.md#saveLocalization) | **PUT** /drafts/{draftId}/localizations/{languageId} | Create or update a localization
*DyspatchClient.DraftsApi* | [**setTranslation**](docs/DraftsApi.md#setTranslation) | **PUT** /drafts/{draftId}/localizations/{languageId}/translations | Set translations for language
*DyspatchClient.DraftsApi* | [**submitDraftForApproval**](docs/DraftsApi.md#submitDraftForApproval) | **POST** /drafts/{draftId}/publishRequest | Submit the draft for approval
*DyspatchClient.LocalizationsApi* | [**getLocalizationById**](docs/LocalizationsApi.md#getLocalizationById) | **GET** /localizations/{localizationId} | Get Localization Object by ID
*DyspatchClient.TemplatesApi* | [**getTemplateById**](docs/TemplatesApi.md#getTemplateById) | **GET** /templates/{templateId} | Get Template by ID
*DyspatchClient.TemplatesApi* | [**getTemplates**](docs/TemplatesApi.md#getTemplates) | **GET** /templates | List Templates


## Documentation for Models

 - [DyspatchClient.APIError](docs/APIError.md)
 - [DyspatchClient.CompiledRead](docs/CompiledRead.md)
 - [DyspatchClient.Cursor](docs/Cursor.md)
 - [DyspatchClient.DraftMetaRead](docs/DraftMetaRead.md)
 - [DyspatchClient.DraftRead](docs/DraftRead.md)
 - [DyspatchClient.DraftsRead](docs/DraftsRead.md)
 - [DyspatchClient.InlineObject](docs/InlineObject.md)
 - [DyspatchClient.LocalizationKeyRead](docs/LocalizationKeyRead.md)
 - [DyspatchClient.LocalizationMetaRead](docs/LocalizationMetaRead.md)
 - [DyspatchClient.LocalizationRead](docs/LocalizationRead.md)
 - [DyspatchClient.TemplateMetaRead](docs/TemplateMetaRead.md)
 - [DyspatchClient.TemplateRead](docs/TemplateRead.md)
 - [DyspatchClient.TemplatesRead](docs/TemplatesRead.md)


## Documentation for Authorization



### Bearer


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
