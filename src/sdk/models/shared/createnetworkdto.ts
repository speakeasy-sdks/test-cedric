/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExplorerApiDto } from "./explorerapidto";
import { GasPriceRecommendationDto } from "./gaspricerecommendationdto";
import { Expose, Type } from "class-transformer";

export class CreateNetworkDto extends SpeakeasyBase {
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
    @Expose({ name: "decimal" })
    decimal?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eip1159" })
    eip1159?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enableExternalWallet" })
    enableExternalWallet?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enableListener" })
    enableListener?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enableRelayer" })
    enableRelayer?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "explorerApi" })
    @Type(() => ExplorerApiDto)
    explorerApi?: ExplorerApiDto;

    @SpeakeasyMetadata()
    @Expose({ name: "explorerUrl" })
    explorerUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "gasPriceRecommendation" })
    @Type(() => GasPriceRecommendationDto)
    gasPriceRecommendation?: GasPriceRecommendationDto;

    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    logo: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "symbol" })
    symbol: string;

    @SpeakeasyMetadata()
    @Expose({ name: "testnet" })
    testnet?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "verifyBlockIntegrity" })
    verifyBlockIntegrity?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "verifyTxIntegrity" })
    verifyTxIntegrity?: boolean;
}
