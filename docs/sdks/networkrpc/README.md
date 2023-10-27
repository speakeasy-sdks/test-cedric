# NetworkRpc
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

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.rpc.create({
    createRpcDto: {
      url: "http://limp-pastry.org",
    },
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.CreateRpcRequest](../../models/operations/createrpcrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateRpcResponse](../../models/operations/createrpcresponse.md)>**


## delete

Delete a rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.rpc.delete({
    id: "<ID>",
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.DeleteRpcRequest](../../models/operations/deleterpcrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.DeleteRpcResponse](../../models/operations/deleterpcresponse.md)>**


## getAll

Return all rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.rpc.getAll({
    name: "string",
  });


  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetAllRpcRequest](../../models/operations/getallrpcrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetAllRpcResponse](../../models/operations/getallrpcresponse.md)>**


## getOne

Return a specific rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.rpc.getOne({
    id: "<ID>",
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetOneRpcRequest](../../models/operations/getonerpcrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetOneRpcResponse](../../models/operations/getonerpcresponse.md)>**


## update

Update a specific rpc for a specific network

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.network.rpc.update({
    updateRpcDto: {},
    id: "<ID>",
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.UpdateRpcRequest](../../models/operations/updaterpcrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdateRpcResponse](../../models/operations/updaterpcresponse.md)>**
