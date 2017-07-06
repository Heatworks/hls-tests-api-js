# HlsTests.DefaultApi

All URIs are relative to *https://d3kndyx4n9.execute-api.us-east-1.amazonaws.com/pre_alpha*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testDelete**](DefaultApi.md#testDelete) | **DELETE** /Test | 
[**testGet**](DefaultApi.md#testGet) | **GET** /Test | 
[**testOptions**](DefaultApi.md#testOptions) | **OPTIONS** /Test | 
[**testPut**](DefaultApi.md#testPut) | **PUT** /Test | 
[**testsGet**](DefaultApi.md#testsGet) | **GET** /Tests | 
[**testsOptions**](DefaultApi.md#testsOptions) | **OPTIONS** /Tests | 


<a name="testDelete"></a>
# **testDelete**
> Empty testDelete(opts)



### Example
```javascript
var HlsTests = require('hls___tests');
var defaultClient = HlsTests.ApiClient.default;

// Configure API key authorization: oAuth_2_0
var oAuth_2_0 = defaultClient.authentications['oAuth_2_0'];
oAuth_2_0.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oAuth_2_0.apiKeyPrefix = 'Token';

var apiInstance = new HlsTests.DefaultApi();

var opts = { 
  'name': "name_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] 

### Return type

[**Empty**](Empty.md)

### Authorization

[oAuth_2_0](../README.md#oAuth_2_0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testGet"></a>
# **testGet**
> Test testGet(opts)



### Example
```javascript
var HlsTests = require('hls___tests');
var defaultClient = HlsTests.ApiClient.default;

// Configure API key authorization: oAuth_2_0
var oAuth_2_0 = defaultClient.authentications['oAuth_2_0'];
oAuth_2_0.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oAuth_2_0.apiKeyPrefix = 'Token';

var apiInstance = new HlsTests.DefaultApi();

var opts = { 
  'name': "name_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] 

### Return type

[**Test**](Test.md)

### Authorization

[oAuth_2_0](../README.md#oAuth_2_0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testOptions"></a>
# **testOptions**
> Empty testOptions()



### Example
```javascript
var HlsTests = require('hls___tests');

var apiInstance = new HlsTests.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testPut"></a>
# **testPut**
> Empty testPut(test)



### Example
```javascript
var HlsTests = require('hls___tests');
var defaultClient = HlsTests.ApiClient.default;

// Configure API key authorization: oAuth_2_0
var oAuth_2_0 = defaultClient.authentications['oAuth_2_0'];
oAuth_2_0.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oAuth_2_0.apiKeyPrefix = 'Token';

var apiInstance = new HlsTests.DefaultApi();

var test = new HlsTests.Test(); // Test | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testPut(test, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test** | [**Test**](Test.md)|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

[oAuth_2_0](../README.md#oAuth_2_0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testsGet"></a>
# **testsGet**
> Tests testsGet(opts)



### Example
```javascript
var HlsTests = require('hls___tests');
var defaultClient = HlsTests.ApiClient.default;

// Configure API key authorization: oAuth_2_0
var oAuth_2_0 = defaultClient.authentications['oAuth_2_0'];
oAuth_2_0.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oAuth_2_0.apiKeyPrefix = 'Token';

var apiInstance = new HlsTests.DefaultApi();

var opts = { 
  'prefix': "prefix_example", // String | 
  'tags': "tags_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | **String**|  | [optional] 
 **tags** | **String**|  | [optional] 

### Return type

[**Tests**](Tests.md)

### Authorization

[oAuth_2_0](../README.md#oAuth_2_0)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testsOptions"></a>
# **testsOptions**
> Empty testsOptions()



### Example
```javascript
var HlsTests = require('hls___tests');

var apiInstance = new HlsTests.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testsOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

