# SmartContractManagement
(*smartContractManagement*)

## Overview

The Smart contract management is an abstraction on top of our **Transaction Manager** and it allow you to build and automate your smart contract transaction easily, without struggling with the ABI and params encoding. With it you can:
- **Deploying smart contract:** Deploy **audited** contract from our library or your own smart contract
- **Import existing contract:** Import existing contract to view them on your dashboard and interact with them.
- **Interact:** Read state and interact with the smart contract previously deployed or imported

### Available Operations

* [call](#call) - Call smart contract
* [delete](#delete) - Delete a smart contract
* [deployFromBytecode](#deployfrombytecode) - Deploy from bytecode (your own contract)
* [deployFromTemplate](#deployfromtemplate) - Deploy from template
* [getAll](#getall) - Get all smart contract
* [getFunctions](#getfunctions) - Get functions & events
* [getOne](#getone) - Get a smart contract
* [importExisting](#importexisting) - Import existing contract
* [read](#read) - Read smart contract
* [update](#update) - Update a smart contract

## call

Call a specific function from a smart contract

### Example Usage

```typescript
import { Test } from "test";
import { Speed } from "test/dist/sdk/models/shared";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.call({
    callDto: {
      customGas: {},
      functionName: "<value>",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "<value>",
    },
    address: "842 Lee Forges",
    network: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CallSmartContractRequest](../../sdk/models/operations/callsmartcontractrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CallSmartContractResponse](../../sdk/models/operations/callsmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete a smart contract.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.delete({
    address: "8653 Vaughn Hills",
    network: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteSmartContractRequest](../../sdk/models/operations/deletesmartcontractrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteSmartContractResponse](../../sdk/models/operations/deletesmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deployFromBytecode

Deploy from bytecode allow you to deploy your own solidity code.

### Example Usage

```typescript
import { Test } from "test";
import { DeployFromBytecodeDtoSpeed, StateMutability, TypeT } from "test/dist/sdk/models/shared";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.deployFromBytecode({
    deployFromBytecodeDto: {
      abi: [
        {
          inputs: {
            components: {},
            name: "<value>",
            type: "<value>",
          },
          outputs: {
            components: {},
            name: "<value>",
            type: "<value>",
          },
          type: TypeT.Event,
        },
      ],
      bytecode: "<value>",
      customGas: {},
      name: "<value>",
      network: "<value>",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "<value>",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeployFromBytecodeSmartContractRequest](../../sdk/models/operations/deployfrombytecodesmartcontractrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeployFromBytecodeSmartContractResponse](../../sdk/models/operations/deployfrombytecodesmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deployFromTemplate

Deploy from starton audited template.

### Example Usage

```typescript
import { Test } from "test";
import { DeployFromTemplateDtoSpeed } from "test/dist/sdk/models/shared";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.deployFromTemplate({
    deployFromTemplateDto: {
      customGas: {},
      name: "TestToken",
      network: "polygon-mumbai",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      templateId: "ERC20_META_TRANSACTION",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeployFromTemplateSmartContractRequest](../../sdk/models/operations/deployfromtemplatesmartcontractrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeployFromTemplateSmartContractResponse](../../sdk/models/operations/deployfromtemplatesmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAll

Return all smart contract

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.getAll({});

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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetAllSmartContractRequest](../../sdk/models/operations/getallsmartcontractrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetAllSmartContractResponse](../../sdk/models/operations/getallsmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFunctions

Return the read functions, write functions and events of a smart contract

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.getFunctions({
    address: "18523 Buford Brook",
    network: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetAvailableFunctionsSmartContractRequest](../../sdk/models/operations/getavailablefunctionssmartcontractrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetAvailableFunctionsSmartContractResponse](../../sdk/models/operations/getavailablefunctionssmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOne

Return a smart contract.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.getOne({
    address: "43504 Penelope Expressway",
    network: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetOneSmartContractRequest](../../sdk/models/operations/getonesmartcontractrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetOneSmartContractResponse](../../sdk/models/operations/getonesmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## importExisting

Import a contract already deployed

### Example Usage

```typescript
import { Test } from "test";
import { StateMutability, TypeT } from "test/dist/sdk/models/shared";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.importExisting({
    abi: [
      {
        inputs: {
          components: {},
          name: "<value>",
          type: "<value>",
        },
        outputs: {
          components: {},
          name: "<value>",
          type: "<value>",
        },
        stateMutability: StateMutability.Nonpayable,
        type: TypeT.Constructor,
      },
    ],
    address: "0x1C1f7A4d7F853856b964947CA03B92993D3ef40e",
    creationHash: "0x55b782a3db6d7b8c1949536110dcaaac69b4f83455959ab2839c09c2ed2ab1da",
    description: "Minimal smart contract description.",
    name: "Minimal Contract Test.",
    network: "polygon-mumbai",
    params: [
      "TestToken",
      "TEST",
      "1000000000000000000000000",
      "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    templateId: "ERC721_META_TRANSACTION",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.ImportSmartContractDto](../../sdk/models/shared/importsmartcontractdto.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ImportExistingSmartContractResponse](../../sdk/models/operations/importexistingsmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## read

Read a specific function from a smart contract

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.read({
    readDto: {
      functionName: "<value>",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
    },
    address: "660 Romaine Highway",
    network: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ReadSmartContractRequest](../../sdk/models/operations/readsmartcontractrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ReadSmartContractResponse](../../sdk/models/operations/readsmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a smart contract.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.smartContractManagement.update({
    updateSmartContractDto: {
      metadata: {},
    },
    address: "050 Mellie Well",
    network: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateSmartContractRequest](../../sdk/models/operations/updatesmartcontractrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateSmartContractResponse](../../sdk/models/operations/updatesmartcontractresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
