/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class UpdateSmartContractDtoMetadata extends SpeakeasyBase {}

export class UpdateSmartContractDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => UpdateSmartContractDtoMetadata)
    metadata?: UpdateSmartContractDtoMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
