/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AwsKmsCredentialsDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accessKeyId" })
    accessKeyId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: string;
}