<!-- Start SDK Example Usage [usage] -->
```typescript
import { Test } from "test";

async function run() {
    const sdk = new Test({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->