# test

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/test-cedric.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/test-cedric/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/test-cedric
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/test-cedric
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Test } from "test";

async function run() {
    const sdk = new Test({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [data](docs/sdks/data/README.md)

* [getBalance](docs/sdks/data/README.md#getbalance) - Get native balance
* [getErc20Balance](docs/sdks/data/README.md#geterc20balance) - Get erc20 balance
* [getGasPrice](docs/sdks/data/README.md#getgasprice) - Get gas price

### [wallet](docs/sdks/wallet/README.md)

* [create](docs/sdks/wallet/README.md#create) - Create a wallet
* [delete](docs/sdks/wallet/README.md#delete) - Delete a wallet
* [getAll](docs/sdks/wallet/README.md#getall) - Get all wallet
* [getOne](docs/sdks/wallet/README.md#getone) - Get a wallet
* [import](docs/sdks/wallet/README.md#import) - Import a wallet
* [requestFaucet](docs/sdks/wallet/README.md#requestfaucet) - Request faucet
* [resyncNonce](docs/sdks/wallet/README.md#resyncnonce) - Resync nonce for a wallet
* [sign](docs/sdks/wallet/README.md#sign) - Sign a message
* [update](docs/sdks/wallet/README.md#update) - Update a wallet

### [ipfs](docs/sdks/ipfs/README.md)

* [delete](docs/sdks/ipfs/README.md#delete) - Delete a pin
* [getAll](docs/sdks/ipfs/README.md#getall) - Get all files
* [getOne](docs/sdks/ipfs/README.md#getone) - Get a file
* [getStorageUsed](docs/sdks/ipfs/README.md#getstorageused) - Get storage used
* [pinExistingFile](docs/sdks/ipfs/README.md#pinexistingfile) - Pin a file already on IPFS
* [update](docs/sdks/ipfs/README.md#update) - Update a file name/metadata
* [uploadFile](docs/sdks/ipfs/README.md#uploadfile) - Upload a file
* [uploadFolder](docs/sdks/ipfs/README.md#uploadfolder) - Upload a folder
* [uploadJson](docs/sdks/ipfs/README.md#uploadjson) - Upload a json

### [kms](docs/sdks/kms/README.md)

* [create](docs/sdks/kms/README.md#create) - Create a kms
* [delete](docs/sdks/kms/README.md#delete) - Delete a kms
* [getAll](docs/sdks/kms/README.md#getall) - Get all kms
* [getOne](docs/sdks/kms/README.md#getone) - Get a kms
* [update](docs/sdks/kms/README.md#update) - Update a kms

### [transactionManager](docs/sdks/transactionmanager/README.md)

* [create](docs/sdks/transactionmanager/README.md#create) - Create a transaction
* [getAll](docs/sdks/transactionmanager/README.md#getall) - Get all transactions
* [getAvailableNonces](docs/sdks/transactionmanager/README.md#getavailablenonces) - Get available nonce for a wallet
* [getOne](docs/sdks/transactionmanager/README.md#getone) - Get a transaction
* [resyncNonce](docs/sdks/transactionmanager/README.md#resyncnonce) - Resync nonce for a wallet

### [transactionManager.setting](docs/sdks/setting/README.md)

* [get](docs/sdks/setting/README.md#get) - Get settings
* [update](docs/sdks/setting/README.md#update) - Update settings

### [network](docs/sdks/network/README.md)

* [create](docs/sdks/network/README.md#create) - Create a network (enterprise)
* [delete](docs/sdks/network/README.md#delete) - Delete a network (enterprise)
* [getAll](docs/sdks/network/README.md#getall) - Get all networks
* [getOne](docs/sdks/network/README.md#getone) - Get a network
* [update](docs/sdks/network/README.md#update) - Update a network (enterprise)

### [network.rpc](docs/sdks/rpc/README.md)

* [create](docs/sdks/rpc/README.md#create) - Add a rpc (enterprise)
* [delete](docs/sdks/rpc/README.md#delete) - Delete a rpc (enterprise)
* [getAll](docs/sdks/rpc/README.md#getall) - Get all rpc (enterprise)
* [getOne](docs/sdks/rpc/README.md#getone) - Get a rpc (enterprise)
* [update](docs/sdks/rpc/README.md#update) - Update a rpc (enterprise)


### [project.member](docs/sdks/member/README.md)

* [delete](docs/sdks/member/README.md#delete) - Delete a member
* [getAll](docs/sdks/member/README.md#getall) - Get all members

### [project.member.invitation](docs/sdks/invitation/README.md)

* [create](docs/sdks/invitation/README.md#create) - Invite a member
* [delete](docs/sdks/invitation/README.md#delete) - Delete an invitation
* [getAll](docs/sdks/invitation/README.md#getall) - Get all member invitation

### [smartContractManagement](docs/sdks/smartcontractmanagement/README.md)

* [call](docs/sdks/smartcontractmanagement/README.md#call) - Call smart contract
* [delete](docs/sdks/smartcontractmanagement/README.md#delete) - Delete a smart contract
* [deployFromBytecode](docs/sdks/smartcontractmanagement/README.md#deployfrombytecode) - Deploy from bytecode (your own contract)
* [deployFromTemplate](docs/sdks/smartcontractmanagement/README.md#deployfromtemplate) - Deploy from template
* [getAll](docs/sdks/smartcontractmanagement/README.md#getall) - Get all smart contract
* [getFunctions](docs/sdks/smartcontractmanagement/README.md#getfunctions) - Get functions & events
* [getOne](docs/sdks/smartcontractmanagement/README.md#getone) - Get a smart contract
* [importExisting](docs/sdks/smartcontractmanagement/README.md#importexisting) - Import existing contract
* [read](docs/sdks/smartcontractmanagement/README.md#read) - Read smart contract
* [update](docs/sdks/smartcontractmanagement/README.md#update) - Update a smart contract


### [smartContract.template](docs/sdks/template/README.md)

* [getAll](docs/sdks/template/README.md#getall) - Get all templates
* [getOne](docs/sdks/template/README.md#getone) - Get a template

### [monitor](docs/sdks/monitor/README.md)

* [create](docs/sdks/monitor/README.md#create) - Create a watcher
* [delete](docs/sdks/monitor/README.md#delete) - Delete a watcher
* [getAll](docs/sdks/monitor/README.md#getall) - Get all watcher
* [getAllEvents](docs/sdks/monitor/README.md#getallevents) - Get all events
* [getOne](docs/sdks/monitor/README.md#getone) - Get a watcher
* [getOneEvent](docs/sdks/monitor/README.md#getoneevent) - Get a watcher event
* [update](docs/sdks/monitor/README.md#update) - Update a watcher

### [webhook](docs/sdks/webhook/README.md)

* [cancel](docs/sdks/webhook/README.md#cancel) - Cancel a webhook
* [getAll](docs/sdks/webhook/README.md#getall) - Get all webhooks
* [getOne](docs/sdks/webhook/README.md#getone) - Get a webhook
* [getSigningSecret](docs/sdks/webhook/README.md#getsigningsecret) - Get signing secret
* [regenerateSigningSecret](docs/sdks/webhook/README.md#regeneratesigningsecret) - Regenerate signing secret
* [resend](docs/sdks/webhook/README.md#resend) - Resend a webhook
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
```typescript
import { Test } from "test";

async function run() {
    const sdk = new Test({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.wallet.getAll({});

    if (res.statusCode == 200) {
        do {
            // handle items

            res = res.next();
        } while (res);
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Test } from "test";

async function run() {
    const sdk = new Test({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    let res;
    try {
        res = await sdk.data.getBalance({
            address: "164 Runolfsson Via",
            network: "<value>",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.starton.com` | None |

#### Example

```typescript
import { Test } from "test";

async function run() {
    const sdk = new Test({
        serverIdx: 0,
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Test } from "test";

async function run() {
    const sdk = new Test({
        serverURL: "https://api.starton.com",
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { test } from "Test";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Test({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name            | Type            | Scheme          |
| --------------- | --------------- | --------------- |
| `startonApiKey` | apiKey          | API key         |

To authenticate with the API the `startonApiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Test } from "test";

async function run() {
    const sdk = new Test({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
