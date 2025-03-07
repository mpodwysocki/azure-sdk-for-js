/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RolloutsCreateOrUpdateOptionalParams,
  RolloutsCreateOrUpdateResponse,
  RolloutsGetOptionalParams,
  RolloutsGetResponse,
  RolloutsDeleteOptionalParams,
  RolloutsCancelOptionalParams,
  RolloutsCancelResponse,
  RolloutsRestartOptionalParams,
  RolloutsRestartResponse,
  RolloutsListOptionalParams,
  RolloutsListResponse
} from "../models/index.js";

/** Interface representing a Rollouts. */
export interface Rollouts {
  /**
   * This is an asynchronous operation and can be polled to completion using the location header returned
   * by this operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    rolloutName: string,
    options?: RolloutsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RolloutsCreateOrUpdateResponse>,
      RolloutsCreateOrUpdateResponse
    >
  >;
  /**
   * This is an asynchronous operation and can be polled to completion using the location header returned
   * by this operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    rolloutName: string,
    options?: RolloutsCreateOrUpdateOptionalParams
  ): Promise<RolloutsCreateOrUpdateResponse>;
  /**
   * Gets detailed information of a rollout.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    rolloutName: string,
    options?: RolloutsGetOptionalParams
  ): Promise<RolloutsGetResponse>;
  /**
   * Only rollouts in terminal state can be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    rolloutName: string,
    options?: RolloutsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Only running rollouts can be canceled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    rolloutName: string,
    options?: RolloutsCancelOptionalParams
  ): Promise<RolloutsCancelResponse>;
  /**
   * Only failed rollouts can be restarted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The options parameters.
   */
  restart(
    resourceGroupName: string,
    rolloutName: string,
    options?: RolloutsRestartOptionalParams
  ): Promise<RolloutsRestartResponse>;
  /**
   * Lists the rollouts in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: RolloutsListOptionalParams
  ): Promise<RolloutsListResponse>;
}
