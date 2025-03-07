/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { InvoiceSections } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { BillingManagementClient } from "../billingManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  InvoiceSection,
  InvoiceSectionsListByBillingProfileNextOptionalParams,
  InvoiceSectionsListByBillingProfileOptionalParams,
  InvoiceSectionsListByBillingProfileResponse,
  InvoiceSectionsValidateDeleteEligibilityOptionalParams,
  InvoiceSectionsValidateDeleteEligibilityResponse,
  InvoiceSectionsDeleteOptionalParams,
  InvoiceSectionsDeleteResponse,
  InvoiceSectionsGetOptionalParams,
  InvoiceSectionsGetResponse,
  InvoiceSectionsCreateOrUpdateOptionalParams,
  InvoiceSectionsCreateOrUpdateResponse,
  InvoiceSectionsListByBillingProfileNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing InvoiceSections operations. */
export class InvoiceSectionsImpl implements InvoiceSections {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class InvoiceSections class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the invoice sections that a user has access to. The operation is supported only for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: InvoiceSectionsListByBillingProfileOptionalParams,
  ): PagedAsyncIterableIterator<InvoiceSection> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountName,
      billingProfileName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByBillingProfilePagingPage(
          billingAccountName,
          billingProfileName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountName: string,
    billingProfileName: string,
    options?: InvoiceSectionsListByBillingProfileOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<InvoiceSection[]> {
    let result: InvoiceSectionsListByBillingProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingProfile(
        billingAccountName,
        billingProfileName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountName,
        billingProfileName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingProfilePagingAll(
    billingAccountName: string,
    billingProfileName: string,
    options?: InvoiceSectionsListByBillingProfileOptionalParams,
  ): AsyncIterableIterator<InvoiceSection> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountName,
      billingProfileName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Validates if the invoice section can be deleted. The operation is supported for billing accounts
   * with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  validateDeleteEligibility(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: InvoiceSectionsValidateDeleteEligibilityOptionalParams,
  ): Promise<InvoiceSectionsValidateDeleteEligibilityResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      validateDeleteEligibilityOperationSpec,
    );
  }

  /**
   * Deletes an invoice section. The operation is supported for billing accounts with agreement type
   * Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  async beginDelete(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: InvoiceSectionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InvoiceSectionsDeleteResponse>,
      InvoiceSectionsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<InvoiceSectionsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      InvoiceSectionsDeleteResponse,
      OperationState<InvoiceSectionsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an invoice section. The operation is supported for billing accounts with agreement type
   * Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: InvoiceSectionsDeleteOptionalParams,
  ): Promise<InvoiceSectionsDeleteResponse> {
    const poller = await this.beginDelete(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets an invoice section by its ID. The operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: InvoiceSectionsGetOptionalParams,
  ): Promise<InvoiceSectionsGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an invoice section. The operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param parameters An invoice section.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    parameters: InvoiceSection,
    options?: InvoiceSectionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InvoiceSectionsCreateOrUpdateResponse>,
      InvoiceSectionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<InvoiceSectionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      InvoiceSectionsCreateOrUpdateResponse,
      OperationState<InvoiceSectionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an invoice section. The operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param parameters An invoice section.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    parameters: InvoiceSection,
    options?: InvoiceSectionsCreateOrUpdateOptionalParams,
  ): Promise<InvoiceSectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the invoice sections that a user has access to. The operation is supported only for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: InvoiceSectionsListByBillingProfileOptionalParams,
  ): Promise<InvoiceSectionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      listByBillingProfileOperationSpec,
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountName: string,
    billingProfileName: string,
    nextLink: string,
    options?: InvoiceSectionsListByBillingProfileNextOptionalParams,
  ): Promise<InvoiceSectionsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, nextLink, options },
      listByBillingProfileNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const validateDeleteEligibilityOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/validateDeleteEligibility",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeleteInvoiceSectionEligibilityResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.InvoiceSectionsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.InvoiceSectionsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.InvoiceSectionsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.InvoiceSectionsDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSection,
    },
    201: {
      bodyMapper: Mappers.InvoiceSection,
    },
    202: {
      bodyMapper: Mappers.InvoiceSection,
    },
    204: {
      bodyMapper: Mappers.InvoiceSection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
    Parameters.includeDeleted,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
