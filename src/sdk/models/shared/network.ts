/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class GasPriceRecommendation extends SpeakeasyBase {}

export class Network extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "blockchain" })
    blockchain: string;

    @SpeakeasyMetadata()
    @Expose({ name: "chainId" })
    chainId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "confirmationBlocks" })
    confirmationBlocks: number;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "decimal" })
    decimal: number;

    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eip1159" })
    eip1159: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enableExternalWallet" })
    enableExternalWallet: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enableListener" })
    enableListener: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enableRelayer" })
    enableRelayer: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "explorerUrl" })
    explorerUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "faucetUrl" })
    faucetUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "gasPriceRecommendation" })
    @Type(() => GasPriceRecommendation)
    gasPriceRecommendation?: GasPriceRecommendation;

    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    logo: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "owner" })
    owner: string;

    @SpeakeasyMetadata()
    @Expose({ name: "symbol" })
    symbol: string;

    @SpeakeasyMetadata()
    @Expose({ name: "testnet" })
    testnet: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "verifyBlockIntegrity" })
    verifyBlockIntegrity: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "verifyTxIntegrity" })
    verifyTxIntegrity: boolean;
}
