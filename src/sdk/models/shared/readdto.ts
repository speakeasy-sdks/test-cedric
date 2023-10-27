/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ReadDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "functionName" })
    functionName: string;

    /**
     * Smart contract parameters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "params" })
    params: any[];
}