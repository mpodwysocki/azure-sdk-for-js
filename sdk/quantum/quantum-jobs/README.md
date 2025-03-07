## Azure Quantum Jobs client library for JavaScript

This package contains an isomorphic SDK for QuantumJobClient.

Azure Quantum is a Microsoft Azure service that you can use to run quantum computing programs in the cloud. Using the Azure Quantum tools and SDKs, you can create quantum programs and run them against different quantum simulators and machines. You can use the `@azure/quantum-jobs` client library to:

- Create, enumerate, and cancel quantum jobs
- Enumerate provider status and quotas

Key links:

- [Source code][source]
- [API reference documentation](https://learn.microsoft.com/qsharp/api/)
- [Product documentation](https://learn.microsoft.com/azure/quantum/)
- [Samples](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/quantum/quantum-jobs/samples)

## Getting started

This section includes everything a developer needs to install and create their first client connection _very quickly_.

### Install the package

Install the Azure Quantum Jobs client library for Javascript with `npm`:

```bash
npm install @azure/quantum-jobs
```

### Prerequisites

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- [Azure subscription](https://azure.microsoft.com/free/)
- [Azure Quantum Workspace][workspaces]

### Authenticate the client

To authenticate with the service, you can use [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential) from the `@azure/identity` library. This will try different authentication mechanisms based on the environment (e.g. Environment Variables, ManagedIdentity, CachedTokens) and finally, it will fallback to InteractiveBrowserCredential.

The client also allows the user to override the above behavior by passing their own implementations of the [TokenCredential](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-auth/src/tokenCredential.ts).

`TokenCredential` is the default Authentication mechanism used by Azure SDKs.

## Key concepts

`QuantumJobClient` is the root class to be used to authenticate, and create, enumerate, and cancel jobs.

`JobDetails` contains all the properties of a job.

`ProviderStatus` contains status information for a provider.

`QuantumJobQuota` contains quota properties.

## Examples

### Create the client

Create an instance of the QuantumJobClient by passing in these parameters:

- [Subscription Id][subscriptions] - looks like XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX and can be found in your list of subscriptions on azure
- [Resource Group Name][resource-groups] - a container that holds related resources for an Azure solution
- [Workspace Name][workspaces] - a collection of assets associated with running quantum
- [Location][location] - choose the best data center by geographical region
- [Storage Container Name][blob-storage] - your blob storage
- [Credential][credentials] - used to authenticate

```ts snippet:ReadmeSampleCreateClient_TokenCredential
import { DefaultAzureCredential } from "@azure/identity";
import { QuantumJobClient } from "@azure/quantum-jobs";

const credential = new DefaultAzureCredential();

// Create a QuantumJobClient
const subscriptionId = "your_subscription_id";
const resourceGroupName = "your_resource_group_name";
const workspaceName = "your_quantum_workspace_name";
const location = "westus";
const endpoint = `https://${location}.quantum.azure.com`;
const quantumJobClient = new QuantumJobClient(
  credential,
  subscriptionId,
  resourceGroupName,
  workspaceName,
  {
    endpoint: endpoint,
    credentialScopes: "https://quantum.microsoft.com/.default",
  },
);
```

### Get Container SAS URI

Create a storage container to put your data.

```ts snippet:ReadmeSampleCreateContainer
import { DefaultAzureCredential } from "@azure/identity";
import { QuantumJobClient } from "@azure/quantum-jobs";
import { ContainerClient } from "@azure/storage-blob";

const credential = new DefaultAzureCredential();
const subscriptionId = "your_subscription_id";
const resourceGroupName = "your_resource_group_name";
const workspaceName = "your_quantum_workspace_name";
const storageContainerName = "containername";
const location = "westus";
const endpoint = `https://${location}.quantum.azure.com`;

const quantumJobClient = new QuantumJobClient(
  credential,
  subscriptionId,
  resourceGroupName,
  workspaceName,
  {
    endpoint: endpoint,
    credentialScopes: "https://quantum.microsoft.com/.default",
  },
);

// Get container Uri with SAS key
const containerUri = (
  await quantumJobClient.storage.sasUri({
    containerName: storageContainerName,
  })
).sasUri;

// Create container if not exists
const containerClient = new ContainerClient(containerUri);
await containerClient.createIfNotExists();
```

### Compile your quantum program into QIR

This step can be done in multiple ways and it is not in scope for this sample.

[Quantum Intermediate Representation (QIR)](https://github.com/qir-alliance/qir-spec) is a [QIR Alliance](https://www.qir-alliance.org/) specification to represent quantum programs within the [LLVM](https://llvm.org/) Intermediate Representation (IR).

A few methods to compile or generate a quantum program into QIR:

- [Q# compiler](https://github.com/microsoft/qsharp-compiler/): Can be used to [compile Q# Code into QIR](https://github.com/microsoft/qsharp-compiler/tree/main/src/QsCompiler/QirGeneration).
- [PyQIR](https://github.com/qir-alliance/pyqir): PyQIR is a set of APIs for generating, parsing, and evaluating Quantum Intermediate Representation (QIR).
- [IQ#](https://github.com/microsoft/iqsharp): Can be used to compile a Q# program into QIR with the [%qir](https://learn.microsoft.com/qsharp/api/iqsharp-magic/qir) magic command.

In this sample, we assume you already have a file with the QIR bitcode and you know the method name that you want to execute (entry point).

We will use the QIR bitcode sample (`BellState.bc` in the samples folder), compiled a Q# code (`BellState.qs` in the samples folder) targeting the `quantinuum.sim.h1-1e` target, with `AdaptiveExecution` target capability.

### Upload Input Data

Using the SAS URI, upload the QIR bitcode input data to the blob client.

```ts snippet:ReadmeSampleUploadInputData
import { DefaultAzureCredential } from "@azure/identity";
import { QuantumJobClient } from "@azure/quantum-jobs";
import { BlockBlobClient } from "@azure/storage-blob";
import { readFileSync } from "node:fs";

const credential = new DefaultAzureCredential();
const subscriptionId = "your_subscription_id";
const resourceGroupName = "your_resource_group_name";
const workspaceName = "your_quantum_workspace_name";
const storageContainerName = "containername";
const location = "westus";
const endpoint = `https://${location}.quantum.azure.com`;

const quantumJobClient = new QuantumJobClient(
  credential,
  subscriptionId,
  resourceGroupName,
  workspaceName,
  {
    endpoint: endpoint,
    credentialScopes: "https://quantum.microsoft.com/.default",
  },
);

// Get input data blob Uri with SAS key
const blobName = "myjobinput.bc";
const inputDataUri = (
  await quantumJobClient.storage.sasUri({
    containerName: storageContainerName,
    blobName: blobName,
  })
).sasUri;

// Upload input data to blob
const blobClient = new BlockBlobClient(inputDataUri);
const problemFilename = "BellState.bc";
const fileContent = readFileSync(problemFilename, "utf8");
const blobOptions = {
  blobHTTPHeaders: {
    blobContentType: "qir.v1",
  },
};
await blobClient.upload(fileContent, Buffer.byteLength(fileContent), blobOptions);
```

### Create The Job

Now that you've uploaded your problem definition to Azure Storage, you can use `jobs.create` to define an Azure Quantum job.

```ts snippet:ReadmeSampleCreateJob
import { DefaultAzureCredential } from "@azure/identity";
import { QuantumJobClient } from "@azure/quantum-jobs";

const credential = new DefaultAzureCredential();
const subscriptionId = "your_subscription_id";
const resourceGroupName = "your_resource_group_name";
const workspaceName = "your_quantum_workspace_name";
const location = "westus";
const endpoint = `https://${location}.quantum.azure.com`;

const quantumJobClient = new QuantumJobClient(
  credential,
  subscriptionId,
  resourceGroupName,
  workspaceName,
  {
    endpoint: endpoint,
    credentialScopes: "https://quantum.microsoft.com/.default",
  },
);

const randomId = `${Math.floor(Math.random() * 10000 + 1)}`;

// Submit job
const jobId = `job-${randomId}`;
const jobName = `jobName-${randomId}`;
const inputDataFormat = "qir.v1";
const outputDataFormat = "microsoft.quantum-results.v1";
const providerId = "quantinuum";
const target = "quantinuum.sim.h1-1e";
const inputParams = {
  entryPoint: "ENTRYPOINT__BellState",
  arguments: [],
  targetCapability: "AdaptiveExecution",
};
const createJobDetails = {
  containerUri: "https://<container-uri>",
  inputDataFormat: inputDataFormat,
  providerId: providerId,
  target: target,
  id: jobId,
  inputDataUri: "https://<input-data-url>",
  name: jobName,
  outputDataFormat: outputDataFormat,
  inputParams: inputParams,
};
const createdJob = await quantumJobClient.jobs.create(jobId, createJobDetails);
```

### Get Job

`GetJob` retrieves a specific job by its id.

```ts snippet:ReadmeSampleGetJob
import { DefaultAzureCredential } from "@azure/identity";
import { QuantumJobClient } from "@azure/quantum-jobs";

const credential = new DefaultAzureCredential();
const subscriptionId = "your_subscription_id";
const resourceGroupName = "your_resource_group_name";
const workspaceName = "your_quantum_workspace_name";
const location = "westus";
const endpoint = `https://${location}.quantum.azure.com`;

const quantumJobClient = new QuantumJobClient(
  credential,
  subscriptionId,
  resourceGroupName,
  workspaceName,
  {
    endpoint: endpoint,
    credentialScopes: "https://quantum.microsoft.com/.default",
  },
);

// Get the job that we've just created based on its jobId
const myJob = await quantumJobClient.jobs.get("job-1234");
```

### Get Jobs

To enumerate all the jobs in the workspace, use the `jobs.list` method.

```ts snippet:ReadmeSampleListJobs
import { DefaultAzureCredential } from "@azure/identity";
import { QuantumJobClient } from "@azure/quantum-jobs";

const credential = new DefaultAzureCredential();
const subscriptionId = "your_subscription_id";
const resourceGroupName = "your_resource_group_name";
const workspaceName = "your_quantum_workspace_name";
const location = "westus";
const endpoint = `https://${location}.quantum.azure.com`;

const quantumJobClient = new QuantumJobClient(
  credential,
  subscriptionId,
  resourceGroupName,
  workspaceName,
  {
    endpoint: endpoint,
    credentialScopes: "https://quantum.microsoft.com/.default",
  },
);

const jobListResult = quantumJobClient.jobs.list();
for await (const job of jobListResult) {
  console.log(`Job Id: ${job.id} and Job Name: ${job.name}`);
}
```

## Next steps

- Visit our [Product documentation](https://learn.microsoft.com/azure/quantum/) to learn more about Azure Quantum.

## Contributing

See the [CONTRIBUTING.md][contributing] for details on building,
testing, and contributing to this library.

This project welcomes contributions and suggestions. Most contributions require
you to agree to a Contributor License Agreement (CLA) declaring that you have
the right to, and actually do, grant us the rights to use your contribution. For
details, visit [cla.microsoft.com](https://cla.opensource.microsoft.com/).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)
or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any
additional questions or comments.

## Troubleshooting

All Quantum Jobs service operations will throw a RequestFailedException on failure with helpful ErrorCodes. Many of these errors are recoverable.

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts snippet:SetLogLevel
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).

<!-- LINKS -->

[source]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/quantum/quantum-jobs/src
[resource-groups]: https://learn.microsoft.com/azure/azure-resource-manager/management/manage-resource-groups-portal
[workspaces]: https://learn.microsoft.com/azure/quantum/how-to-create-quantum-workspaces-with-the-azure-portal
[location]: https://azure.microsoft.com/global-infrastructure/services/?products=quantum
[blob-storage]: https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction
[contributing]: https://github.com/Azure/azure-sdk-for-js/tree/main/CONTRIBUTING.md
[subscriptions]: https://ms.portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade
[credentials]: https://learn.microsoft.com/javascript/api/overview/azure/identity-readme?view=azure-node-latest#credentials
[style-guide-msft]: https://learn.microsoft.com/style-guide/capitalization
[style-guide-cloud]: https://aka.ms/azsdk/cloud-style-guide
