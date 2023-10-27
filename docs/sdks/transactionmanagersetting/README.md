# TransactionManagerSetting
(*transactionManager.setting*)

### Available Operations

* [get](#get) - Get settings
* [update](#update) - Update settings

## get

Return settings

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.transactionManager.setting.get({
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAllSettingRelayerRequest](../../models/operations/getallsettingrelayerrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAllSettingRelayerResponse](../../models/operations/getallsettingrelayerresponse.md)>**


## update

Update settings

### Example Usage

```typescript
import { Test } from "test";

(async() => {
  const sdk = new Test({
    startonApiKey: "",
  });

  const res = await sdk.transactionManager.setting.update({
    updateSettingRelayerDto: {
      unstuckAutomaticGasPrice: true,
      unstuckCustomGasPrice: true,
      unstuckGasPriceDelay: 300,
      unstuckMaxGasPrice: "150000000000",
      unstuckMissingNonce: true,
      unstuckMissingNonceDelay: 300,
    },
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateSettingRelayerRequest](../../models/operations/updatesettingrelayerrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateSettingRelayerResponse](../../models/operations/updatesettingrelayerresponse.md)>**
