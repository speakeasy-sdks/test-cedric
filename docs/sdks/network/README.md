# Network
(*network*)

## Overview

Get all available network, or add your custom one (enterprise only)

### Available Operations

* [create](#create) - Create a network (enterprise)
* [delete](#delete) - Delete a network (enterprise)
* [getAll](#getall) - Get all networks
* [getOne](#getone) - Get a network
* [update](#update) - Update a network (enterprise)

## create

Create a network (enterprise).

### Example Usage

```typescript
import { Test } from "test";
import { ExplorerApiDtoType } from "test/dist/sdk/models/shared";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.create({
    blockchain: "string",
    chainId: 4865.89,
    confirmationBlocks: 4893.82,
    displayName: "string",
    explorerApi: {
      apiKey: "string",
      type: ExplorerApiDtoType.Etherscan,
      url: "https://timely-haven.biz",
    },
    gasPriceRecommendation: {
      defaultRelayerUnstuck: "string",
      lowest: "string",
      max: "string",
    },
    logo: "string",
    name: "string",
    symbol: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateNetworkDto](../../sdk/models/shared/createnetworkdto.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateNetworkResponse](../../sdk/models/operations/createnetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Delete a network (enterprise).

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.delete({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteNetworkRequest](../../sdk/models/operations/deletenetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteNetworkResponse](../../sdk/models/operations/deletenetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAll

Return all networks

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.getAll({});

  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetAllNetworkRequest](../../sdk/models/operations/getallnetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetAllNetworkResponse](../../sdk/models/operations/getallnetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getOne

Return a network.

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.getOne({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetOneNetworkRequest](../../sdk/models/operations/getonenetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetOneNetworkResponse](../../sdk/models/operations/getonenetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update a network.

### Example Usage

```typescript
import { Test } from "test";
import { ExplorerApiDtoType } from "test/dist/sdk/models/shared";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.update({
    updateNetworkDto: {
      explorerApi: {
        apiKey: "string",
        type: ExplorerApiDtoType.Etherscan,
        url: "https://alarming-nondisclosure.com",
      },
      gasPriceRecommendation: {
        defaultRelayerUnstuck: "string",
        lowest: "string",
        max: "string",
      },
    },
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateNetworkRequest](../../sdk/models/operations/updatenetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateNetworkResponse](../../sdk/models/operations/updatenetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
