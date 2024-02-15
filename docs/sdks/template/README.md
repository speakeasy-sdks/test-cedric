# Template
(*smartContract.template*)

### Available Operations

* [getAll](#getall) - Get all templates
* [getOne](#getone) - Get a template

## getAll

Return all templates created by starton

### Example Usage

```typescript
import { Test } from "test";
import { Category } from "test/dist/sdk/models/operations";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContract.template.getAll({});

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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetAllSmartContractTemplateRequest](../../sdk/models/operations/getallsmartcontracttemplaterequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetAllSmartContractTemplateResponse](../../sdk/models/operations/getallsmartcontracttemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOne

Return a template.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContract.template.getOne({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetOneSmartContractTemplateRequest](../../sdk/models/operations/getonesmartcontracttemplaterequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetOneSmartContractTemplateResponse](../../sdk/models/operations/getonesmartcontracttemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
