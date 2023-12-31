/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ExplorerApiDtoType {
    Etherscan = "etherscan",
    Blockscout = "blockscout",
}

export class ExplorerApiDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "apiKey" })
    apiKey: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: ExplorerApiDtoType;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}
