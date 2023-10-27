/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class NoncesAvailable extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "availableNonces" })
    availableNonces: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "nextNonce" })
    nextNonce: number;
}
