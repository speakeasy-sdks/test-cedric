# Ipfs
(*ipfs*)

## Overview

IPFS allows users to host and receive content in a manner similar to BitTorrent. As opposed to a centrally located server, IPFS is built around a decentralized system creating a resilient system of file storage and sharing. Starton IPFS storage service acts as a liaison between the IPFS protocol and you, with a user-friendly interface that lets you pin or upload files as you would any other storage service. You get all the benefits of hosting your content on the protocol while still having the easy process of uploading it.

### Available Operations

* [delete](#delete) - Delete a pin
* [getAll](#getall) - Get all files
* [getOne](#getone) - Get a file
* [getStorageUsed](#getstorageused) - Get storage used
* [pinExistingFile](#pinexistingfile) - Pin a file already on IPFS
* [update](#update) - Update a file name/metadata
* [uploadFile](#uploadfile) - Upload a file
* [uploadFolder](#uploadfolder) - Upload a folder
* [uploadJson](#uploadjson) - Upload a json

## delete

Delete a pin.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.delete({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeletePinRequest](../../sdk/models/operations/deletepinrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeletePinResponse](../../sdk/models/operations/deletepinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAll

Return all files pinned on IPFS

### Example Usage

```typescript
import { Test } from "test";
import { Status } from "test/dist/sdk/models/operations";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.getAll({});

  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetAllPinRequest](../../sdk/models/operations/getallpinrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAllPinResponse](../../sdk/models/operations/getallpinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOne

Return a file already uploaded on IPFS.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.getOne({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetOnePinRequest](../../sdk/models/operations/getonepinrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetOnePinResponse](../../sdk/models/operations/getonepinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getStorageUsed

Get storage used

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.getStorageUsed();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStorageUsedPinResponse](../../sdk/models/operations/getstorageusedpinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## pinExistingFile

Pin a file already uploaded on IPFS and ask starton to keep a copy of it

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.pinExistingFile({
    cid: "<value>",
    metadata: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.CreatePinDto](../../sdk/models/shared/createpindto.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.CreatePinResponse](../../sdk/models/operations/createpinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a file name or metadata. If you want to edit a file directly, you need to delete it and upload a new one, on IPFS file are referenced by unique hash

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.update({
    updatePinDto: {
      metadata: {},
    },
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UpdatePinRequest](../../sdk/models/operations/updatepinrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdatePinResponse](../../sdk/models/operations/updatepinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## uploadFile

Upload a new file on IPFS

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.uploadFile({
    file: {
      content: new TextEncoder().encode("0xc7cca7F47D"),
      fileName: "through_ew.mp4v",
    },
    metadata: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UploadFromFilePinRequestBody](../../sdk/models/operations/uploadfromfilepinrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UploadFromFilePinResponse](../../sdk/models/operations/uploadfromfilepinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## uploadFolder

Upload a new folder on IPFS

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.uploadFolder({
    files: [
      {
        content: new TextEncoder().encode("0x08C8AeC4Bb"),
        fileName: "flit.html",
      },
    ],
    metadata: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UploadFromFolderPinRequestBody](../../sdk/models/operations/uploadfromfolderpinrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UploadFromFolderPinResponse](../../sdk/models/operations/uploadfromfolderpinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## uploadJson

Upload a json.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.ipfs.uploadJson({
    content: {},
    metadata: {},
    name: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.UploadJsonDto](../../sdk/models/shared/uploadjsondto.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UploadFromJsonPinResponse](../../sdk/models/operations/uploadfromjsonpinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
