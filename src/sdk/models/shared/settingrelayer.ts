/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class SettingRelayer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network: string;

    @SpeakeasyMetadata()
    @Expose({ name: "projectId" })
    projectId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unstuckAutomaticGasPrice" })
    unstuckAutomaticGasPrice: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "unstuckCustomGasPrice" })
    unstuckCustomGasPrice: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "unstuckGasPriceDelay" })
    unstuckGasPriceDelay: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unstuckMaxGasPrice" })
    unstuckMaxGasPrice: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unstuckMissingNonce" })
    unstuckMissingNonce: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "unstuckMissingNonceDelay" })
    unstuckMissingNonceDelay: number;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
