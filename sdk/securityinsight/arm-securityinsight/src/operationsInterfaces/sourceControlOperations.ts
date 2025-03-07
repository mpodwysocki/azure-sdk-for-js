/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Repo,
  RepoType,
  SourceControlListRepositoriesOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SourceControlOperations. */
export interface SourceControlOperations {
  /**
   * Gets a list of repositories metadata.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param repoType The repo type.
   * @param options The options parameters.
   */
  listRepositories(
    resourceGroupName: string,
    workspaceName: string,
    repoType: RepoType,
    options?: SourceControlListRepositoriesOptionalParams
  ): PagedAsyncIterableIterator<Repo>;
}
