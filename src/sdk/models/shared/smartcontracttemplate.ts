/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class SmartContractTemplateAbi extends SpeakeasyBase {}

export enum Category {
    Nft = "NFT",
    Fungible = "FUNGIBLE",
    Other = "OTHER",
    Deprecated = "DEPRECATED",
    Sale = "SALE",
    Tool = "TOOL",
}

export class SmartContractTemplateCompilationDetails extends SpeakeasyBase {}

export class Form extends SpeakeasyBase {}

export class SmartContractTemplate extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: SmartContractTemplateAbi })
    @Expose({ name: "abi" })
    @Type(() => SmartContractTemplateAbi)
    abi: SmartContractTemplateAbi[];

    @SpeakeasyMetadata()
    @Expose({ name: "blockchains" })
    blockchains: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category: Category;

    @SpeakeasyMetadata()
    @Expose({ name: "compilationDetails" })
    @Type(() => SmartContractTemplateCompilationDetails)
    compilationDetails?: SmartContractTemplateCompilationDetails;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "form" })
    @Type(() => Form)
    form?: Form;

    @SpeakeasyMetadata()
    @Expose({ name: "githubUrl" })
    githubUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "humanReadableAbi" })
    humanReadableAbi: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isActivated" })
    isActivated: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "isAudited" })
    isAudited: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order" })
    order: number;

    @SpeakeasyMetadata()
    @Expose({ name: "shortDescription" })
    shortDescription: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;
}
