# Member
(*project.member*)

### Available Operations

* [delete](#delete) - Delete a member
* [getAll](#getall) - Get all members

## delete

Delete a member.

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.project.member.delete({
    userId: "<value>",
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
| `request`                                                                                          | [operations.DeleteProjectMemberRequest](../../sdk/models/operations/deleteprojectmemberrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteProjectMemberResponse](../../sdk/models/operations/deleteprojectmemberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAll

Return all members

### Example Usage

```typescript
import { Test } from "test";

async function run() {
  const sdk = new Test({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.project.member.getAll();

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

**Promise<[operations.GetAllProjectMemberResponse](../../sdk/models/operations/getallprojectmemberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
