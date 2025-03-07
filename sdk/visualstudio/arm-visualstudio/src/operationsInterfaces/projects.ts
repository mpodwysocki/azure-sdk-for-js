/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ProjectsListByResourceGroupOptionalParams,
  ProjectsListByResourceGroupResponse,
  ProjectResource,
  ProjectsCreateOptionalParams,
  ProjectsCreateResponse,
  ProjectsGetOptionalParams,
  ProjectsGetResponse,
  ProjectsUpdateOptionalParams,
  ProjectsUpdateResponse,
  ProjectsGetJobStatusOptionalParams,
  ProjectsGetJobStatusResponse
} from "../models/index.js";

/** Interface representing a Projects. */
export interface Projects {
  /**
   * Gets all Visual Studio Team Services project resources created in the specified Team Services
   * account.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    rootResourceName: string,
    options?: ProjectsListByResourceGroupOptionalParams
  ): Promise<ProjectsListByResourceGroupResponse>;
  /**
   * Creates a Team Services project in the collection with the specified name. 'VersionControlOption'
   * and 'ProcessTemplateId' must be specified in the resource properties. Valid values for
   * VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId:
   * 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC,
   * 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process
   * templates).
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param body The request data.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    body: ProjectResource,
    options?: ProjectsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProjectsCreateResponse>,
      ProjectsCreateResponse
    >
  >;
  /**
   * Creates a Team Services project in the collection with the specified name. 'VersionControlOption'
   * and 'ProcessTemplateId' must be specified in the resource properties. Valid values for
   * VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId:
   * 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC,
   * 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process
   * templates).
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param body The request data.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    body: ProjectResource,
    options?: ProjectsCreateOptionalParams
  ): Promise<ProjectsCreateResponse>;
  /**
   * Gets the details of a Team Services project resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    options?: ProjectsGetOptionalParams
  ): Promise<ProjectsGetResponse>;
  /**
   * Updates the tags of the specified Team Services project.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param body The request data.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    body: ProjectResource,
    options?: ProjectsUpdateOptionalParams
  ): Promise<ProjectsUpdateResponse>;
  /**
   * Gets the status of the project resource creation job.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param subContainerName This parameter should be set to the resourceName.
   * @param operation The operation type. The only supported value is 'put'.
   * @param options The options parameters.
   */
  getJobStatus(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    subContainerName: string,
    operation: string,
    options?: ProjectsGetJobStatusOptionalParams
  ): Promise<ProjectsGetJobStatusResponse>;
}
