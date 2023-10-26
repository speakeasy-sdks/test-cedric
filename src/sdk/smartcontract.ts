/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKConfiguration } from "./sdk";
import { SmartContractTemplate } from "./smartcontracttemplate";

export class SmartContract {
    public template: SmartContractTemplate;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.template = new SmartContractTemplate(this.sdkConfiguration);
    }
}
