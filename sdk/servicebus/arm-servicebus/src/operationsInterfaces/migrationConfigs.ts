/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  MigrationConfigProperties,
  MigrationConfigsListOptionalParams,
  MigrationConfigurationName,
  MigrationConfigsCreateAndStartMigrationOptionalParams,
  MigrationConfigsCreateAndStartMigrationResponse,
  MigrationConfigsDeleteOptionalParams,
  MigrationConfigsGetOptionalParams,
  MigrationConfigsGetResponse,
  MigrationConfigsCompleteMigrationOptionalParams,
  MigrationConfigsRevertOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MigrationConfigs. */
export interface MigrationConfigs {
  /**
   * Gets all migrationConfigurations
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    namespaceName: string,
    options?: MigrationConfigsListOptionalParams
  ): PagedAsyncIterableIterator<MigrationConfigProperties>;
  /**
   * Creates Migration configuration and starts migration of entities from Standard to Premium namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param parameters Parameters required to create Migration Configuration
   * @param options The options parameters.
   */
  beginCreateAndStartMigration(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    parameters: MigrationConfigProperties,
    options?: MigrationConfigsCreateAndStartMigrationOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MigrationConfigsCreateAndStartMigrationResponse>,
      MigrationConfigsCreateAndStartMigrationResponse
    >
  >;
  /**
   * Creates Migration configuration and starts migration of entities from Standard to Premium namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param parameters Parameters required to create Migration Configuration
   * @param options The options parameters.
   */
  beginCreateAndStartMigrationAndWait(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    parameters: MigrationConfigProperties,
    options?: MigrationConfigsCreateAndStartMigrationOptionalParams
  ): Promise<MigrationConfigsCreateAndStartMigrationResponse>;
  /**
   * Deletes a MigrationConfiguration
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves Migration Config
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsGetOptionalParams
  ): Promise<MigrationConfigsGetResponse>;
  /**
   * This operation Completes Migration of entities by pointing the connection strings to Premium
   * namespace and any entities created after the operation will be under Premium Namespace.
   * CompleteMigration operation will fail when entity migration is in-progress.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  completeMigration(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsCompleteMigrationOptionalParams
  ): Promise<void>;
  /**
   * This operation reverts Migration
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param configName The configuration name. Should always be "$default".
   * @param options The options parameters.
   */
  revert(
    resourceGroupName: string,
    namespaceName: string,
    configName: MigrationConfigurationName,
    options?: MigrationConfigsRevertOptionalParams
  ): Promise<void>;
}
