# DyspatchClient.LocalizationRead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | An opaque, unique identifier for a localization | [optional] 
**languages** | **[String]** | a list of locale codes that are available in the localization. See [supported languages](https://docs.dyspatch.io/localization/supported_languages/) for an exhaustive list of locale codes.  | [optional] 
**url** | **String** | The API url for a specific localization | [optional] 
**template** | **String** | An opaque, unique identifier for a template | [optional] 
**compiled** | [**CompiledRead**](CompiledRead.md) |  | [optional] 
**createdAt** | **Date** | The time of initial creation | [optional] 
**updatedAt** | **Date** | The time of last update | [optional] 
**name** | **String** | The user-specified name of a localization | [optional] 
**localeGroup** | **String** | the locale group this localization belongs to, if this field is empty the localization does not belong to any locale group | [optional] 


