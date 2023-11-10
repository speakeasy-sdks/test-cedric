<!-- Start SDK Example Usage -->
```typescript
import { Test } from "test";

(async () => {
    const sdk = new Test({
        startonApiKey: "",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->