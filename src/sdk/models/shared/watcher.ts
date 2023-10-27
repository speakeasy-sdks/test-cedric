/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class WatcherCustomEventAbi extends SpeakeasyBase {}

export class WatcherCustomFilters extends SpeakeasyBase {}

export class WatcherMetadata extends SpeakeasyBase {}

export enum WatcherTriggerType {
    Block = "BLOCK",
    Transaction = "TRANSACTION",
    Event = "EVENT",
    GasPrice = "GAS_PRICE",
}

export enum WatcherType {
    MinedTransaction = "MINED_TRANSACTION",
    AddressActivity = "ADDRESS_ACTIVITY",
    AddressReceivedNativeCurrency = "ADDRESS_RECEIVED_NATIVE_CURRENCY",
    AddressSentNativeCurrency = "ADDRESS_SENT_NATIVE_CURRENCY",
    EventTransfer = "EVENT_TRANSFER",
    Erc721EventTransfer = "ERC721_EVENT_TRANSFER",
    Erc1155EventTransferSingle = "ERC1155_EVENT_TRANSFER_SINGLE",
    Erc1155EventTransferBatch = "ERC1155_EVENT_TRANSFER_BATCH",
    EventMint = "EVENT_MINT",
    EventApproval = "EVENT_APPROVAL",
    EventCustom = "EVENT_CUSTOM",
}

export class Watcher extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address: string;

    @SpeakeasyMetadata()
    @Expose({ name: "confirmationsBlocks" })
    confirmationsBlocks: number;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata({ elemType: WatcherCustomEventAbi })
    @Expose({ name: "customEventAbi" })
    @Type(() => WatcherCustomEventAbi)
    customEventAbi?: WatcherCustomEventAbi[];

    @SpeakeasyMetadata()
    @Expose({ name: "customFilters" })
    @Type(() => WatcherCustomFilters)
    customFilters?: WatcherCustomFilters;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => WatcherMetadata)
    metadata?: WatcherMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paused" })
    paused: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "pausedReason" })
    pausedReason?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "projectId" })
    projectId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "triggerType" })
    triggerType: WatcherTriggerType;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: WatcherType;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "webhookUrl" })
    webhookUrl: string;
}