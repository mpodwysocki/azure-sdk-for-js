/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationStatusBackupVaultContextGetOptionalParams,
  OperationStatusBackupVaultContextGetResponse,
} from "../models/index.js";

/** Interface representing a OperationStatusBackupVaultContext. */
export interface OperationStatusBackupVaultContext {
  /**
   * Gets the operation status for an operation over a BackupVault's context.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param operationId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: OperationStatusBackupVaultContextGetOptionalParams,
  ): Promise<OperationStatusBackupVaultContextGetResponse>;
}
