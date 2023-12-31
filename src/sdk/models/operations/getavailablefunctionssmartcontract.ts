/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAvailableFunctionsSmartContractRequest extends SpeakeasyBase {
    /**
     * Smart contract address.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
    address: string;

    /**
     * EVM starton supported network.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=network" })
    network: string;
}

export class GetAvailableFunctionsSmartContractResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    availableFunctions?: shared.AvailableFunctions;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
