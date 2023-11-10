/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAllSmartContractRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
    address?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAbi" })
    includeAbi?: boolean;

    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=includeCompilationDetails",
    })
    includeCompilationDetails?: boolean;

    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=network" })
    network?: string;

    /**
     * Number of returned page. By default the returned page is the first.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;
}

export class GetAllSmartContractSmartContractPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.SmartContract })
    @Expose({ name: "items" })
    @Type(() => shared.SmartContract)
    items: shared.SmartContract[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.PaginationData)
    meta: shared.PaginationData;
}

export class GetAllSmartContractResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    smartContractPaginated?: GetAllSmartContractSmartContractPaginated;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    next: () => Promise<GetAllSmartContractResponse | null>;
}
