# Rpc
(*network.rpc*)

### Available Operations

* [create](#create) - Add a rpc (enterprise)
* [delete](#delete) - Delete a rpc (enterprise)
* [getAll](#getall) - Get all rpc (enterprise)
* [getOne](#getone) - Get a rpc (enterprise)
* [update](#update) - Update a rpc (enterprise)

## create

Add a rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.network.rpc.create({
    createRpcDto: {
      url: "http://limp-pastry.org",
    },
    name: "<value>",
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
| `request`                                                                      | [operations.CreateRpcRequest](../../sdk/models/operations/createrpcrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateRpcResponse](../../sdk/models/operations/createrpcresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete a rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.network.rpc.delete({
    id: "<id>",
    name: "<value>",
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
| `request`                                                                      | [operations.DeleteRpcRequest](../../sdk/models/operations/deleterpcrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteRpcResponse](../../sdk/models/operations/deleterpcresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAll

Return all rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.network.rpc.getAll({
    name: "<value>",
  });

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
| `request`                                                                      | [operations.GetAllRpcRequest](../../sdk/models/operations/getallrpcrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAllRpcResponse](../../sdk/models/operations/getallrpcresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOne

Return a specific rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.network.rpc.getOne({
    id: "<id>",
    name: "<value>",
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
| `request`                                                                      | [operations.GetOneRpcRequest](../../sdk/models/operations/getonerpcrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetOneRpcResponse](../../sdk/models/operations/getonerpcresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a specific rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.network.rpc.update({
    updateRpcDto: {},
    id: "<id>",
    name: "<value>",
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
| `request`                                                                      | [operations.UpdateRpcRequest](../../sdk/models/operations/updaterpcrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateRpcResponse](../../sdk/models/operations/updaterpcresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
