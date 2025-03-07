/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { BestPracticesVersions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AutomanageClient } from "../automanageClient.js";
import {
  BestPractice,
  BestPracticesVersionsListByTenantOptionalParams,
  BestPracticesVersionsListByTenantResponse,
  BestPracticesVersionsGetOptionalParams,
  BestPracticesVersionsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing BestPracticesVersions operations. */
export class BestPracticesVersionsImpl implements BestPracticesVersions {
  private readonly client: AutomanageClient;

  /**
   * Initialize a new instance of the class BestPracticesVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AutomanageClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of Automanage best practices versions
   * @param bestPracticeName The Automanage best practice name.
   * @param options The options parameters.
   */
  public listByTenant(
    bestPracticeName: string,
    options?: BestPracticesVersionsListByTenantOptionalParams
  ): PagedAsyncIterableIterator<BestPractice> {
    const iter = this.listByTenantPagingAll(bestPracticeName, options);
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
        return this.listByTenantPagingPage(bestPracticeName, options, settings);
      }
    };
  }

  private async *listByTenantPagingPage(
    bestPracticeName: string,
    options?: BestPracticesVersionsListByTenantOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<BestPractice[]> {
    let result: BestPracticesVersionsListByTenantResponse;
    result = await this._listByTenant(bestPracticeName, options);
    yield result.value || [];
  }

  private async *listByTenantPagingAll(
    bestPracticeName: string,
    options?: BestPracticesVersionsListByTenantOptionalParams
  ): AsyncIterableIterator<BestPractice> {
    for await (const page of this.listByTenantPagingPage(
      bestPracticeName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get information about a Automanage best practice version
   * @param bestPracticeName The Automanage best practice name.
   * @param versionName The Automanage best practice version name.
   * @param options The options parameters.
   */
  get(
    bestPracticeName: string,
    versionName: string,
    options?: BestPracticesVersionsGetOptionalParams
  ): Promise<BestPracticesVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { bestPracticeName, versionName, options },
      getOperationSpec
    );
  }

  /**
   * Retrieve a list of Automanage best practices versions
   * @param bestPracticeName The Automanage best practice name.
   * @param options The options parameters.
   */
  private _listByTenant(
    bestPracticeName: string,
    options?: BestPracticesVersionsListByTenantOptionalParams
  ): Promise<BestPracticesVersionsListByTenantResponse> {
    return this.client.sendOperationRequest(
      { bestPracticeName, options },
      listByTenantOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Automanage/bestPractices/{bestPracticeName}/versions/{versionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BestPractice
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.bestPracticeName,
    Parameters.versionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTenantOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Automanage/bestPractices/{bestPracticeName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BestPracticeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.bestPracticeName],
  headerParameters: [Parameters.accept],
  serializer
};
