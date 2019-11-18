/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const access: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "access"
  ],
  mapper: {
    serializedName: "x-ms-blob-public-access",
    type: {
      name: "String"
    }
  }
};
export const action0: coreHttp.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'acquire',
    type: {
      name: "String"
    }
  }
};
export const action1: coreHttp.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'release',
    type: {
      name: "String"
    }
  }
};
export const action2: coreHttp.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'renew',
    type: {
      name: "String"
    }
  }
};
export const action3: coreHttp.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'break',
    type: {
      name: "String"
    }
  }
};
export const action4: coreHttp.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'change',
    type: {
      name: "String"
    }
  }
};
export const action5: coreHttp.OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "action",
    defaultValue: 'setAccessControl',
    type: {
      name: "String"
    }
  }
};
export const action6: coreHttp.OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "action",
    defaultValue: 'getAccessControl',
    type: {
      name: "String"
    }
  }
};
export const appendPosition: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "appendPositionAccessConditions",
    "appendPosition"
  ],
  mapper: {
    serializedName: "x-ms-blob-condition-appendpos",
    type: {
      name: "Number"
    }
  }
};
export const blobCacheControl: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobCacheControl"
  ],
  mapper: {
    serializedName: "x-ms-blob-cache-control",
    type: {
      name: "String"
    }
  }
};
export const blobContentDisposition: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentDisposition"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-disposition",
    type: {
      name: "String"
    }
  }
};
export const blobContentEncoding: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentEncoding"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-encoding",
    type: {
      name: "String"
    }
  }
};
export const blobContentLanguage: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentLanguage"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-language",
    type: {
      name: "String"
    }
  }
};
export const blobContentLength: coreHttp.OperationParameter = {
  parameterPath: "blobContentLength",
  mapper: {
    required: true,
    serializedName: "x-ms-blob-content-length",
    type: {
      name: "Number"
    }
  }
};
export const blobContentMD5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};
export const blobContentType: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentType"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-type",
    type: {
      name: "String"
    }
  }
};
export const blobSequenceNumber: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "blobSequenceNumber"
  ],
  mapper: {
    serializedName: "x-ms-blob-sequence-number",
    defaultValue: 0,
    type: {
      name: "Number"
    }
  }
};
export const blobType0: coreHttp.OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-blob-type",
    defaultValue: 'PageBlob',
    type: {
      name: "String"
    }
  }
};
export const blobType1: coreHttp.OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-blob-type",
    defaultValue: 'AppendBlob',
    type: {
      name: "String"
    }
  }
};
export const blobType2: coreHttp.OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-blob-type",
    defaultValue: 'BlockBlob',
    type: {
      name: "String"
    }
  }
};
export const blockId: coreHttp.OperationQueryParameter = {
  parameterPath: "blockId",
  mapper: {
    required: true,
    serializedName: "blockid",
    type: {
      name: "String"
    }
  }
};
export const breakPeriod: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "breakPeriod"
  ],
  mapper: {
    serializedName: "x-ms-lease-break-period",
    type: {
      name: "Number"
    }
  }
};
export const cacheControl: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "cacheControl"
  ],
  mapper: {
    serializedName: "x-ms-cache-control",
    type: {
      name: "String"
    }
  }
};
export const comp0: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'properties',
    type: {
      name: "String"
    }
  }
};
export const comp1: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'stats',
    type: {
      name: "String"
    }
  }
};
export const comp10: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'copy',
    type: {
      name: "String"
    }
  }
};
export const comp11: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'tier',
    type: {
      name: "String"
    }
  }
};
export const comp12: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'page',
    type: {
      name: "String"
    }
  }
};
export const comp13: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'pagelist',
    type: {
      name: "String"
    }
  }
};
export const comp14: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'incrementalcopy',
    type: {
      name: "String"
    }
  }
};
export const comp15: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'appendblock',
    type: {
      name: "String"
    }
  }
};
export const comp16: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'block',
    type: {
      name: "String"
    }
  }
};
export const comp17: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'blocklist',
    type: {
      name: "String"
    }
  }
};
export const comp2: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'list',
    type: {
      name: "String"
    }
  }
};
export const comp3: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'userdelegationkey',
    type: {
      name: "String"
    }
  }
};
export const comp4: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'batch',
    type: {
      name: "String"
    }
  }
};
export const comp5: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'metadata',
    type: {
      name: "String"
    }
  }
};
export const comp6: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'acl',
    type: {
      name: "String"
    }
  }
};
export const comp7: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'lease',
    type: {
      name: "String"
    }
  }
};
export const comp8: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'undelete',
    type: {
      name: "String"
    }
  }
};
export const comp9: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'snapshot',
    type: {
      name: "String"
    }
  }
};
export const contentDisposition: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentDisposition"
  ],
  mapper: {
    serializedName: "x-ms-content-disposition",
    type: {
      name: "String"
    }
  }
};
export const contentEncoding: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentEncoding"
  ],
  mapper: {
    serializedName: "x-ms-content-encoding",
    type: {
      name: "String"
    }
  }
};
export const contentLanguage: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentLanguage"
  ],
  mapper: {
    serializedName: "x-ms-content-language",
    type: {
      name: "String"
    }
  }
};
export const contentLength: coreHttp.OperationParameter = {
  parameterPath: "contentLength",
  mapper: {
    required: true,
    serializedName: "Content-Length",
    type: {
      name: "Number"
    }
  }
};
export const contentType: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentType"
  ],
  mapper: {
    serializedName: "x-ms-content-type",
    type: {
      name: "String"
    }
  }
};
export const copyActionAbortConstant: coreHttp.OperationParameter = {
  parameterPath: "copyActionAbortConstant",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-copy-action",
    defaultValue: 'abort',
    type: {
      name: "String"
    }
  }
};
export const copyId: coreHttp.OperationQueryParameter = {
  parameterPath: "copyId",
  mapper: {
    required: true,
    serializedName: "copyid",
    type: {
      name: "String"
    }
  }
};
export const copySource: coreHttp.OperationParameter = {
  parameterPath: "copySource",
  mapper: {
    required: true,
    serializedName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};
export const deleteSnapshots: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "deleteSnapshots"
  ],
  mapper: {
    serializedName: "x-ms-delete-snapshots",
    type: {
      name: "Enum",
      allowedValues: [
        "include",
        "only"
      ]
    }
  }
};
export const delimiter: coreHttp.OperationQueryParameter = {
  parameterPath: "delimiter",
  mapper: {
    required: true,
    serializedName: "delimiter",
    type: {
      name: "String"
    }
  }
};
export const directoryProperties: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "directoryProperties"
  ],
  mapper: {
    serializedName: "x-ms-properties",
    type: {
      name: "String"
    }
  }
};
export const duration: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "duration"
  ],
  mapper: {
    serializedName: "x-ms-lease-duration",
    type: {
      name: "Number"
    }
  }
};
export const encryptionAlgorithm: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "cpkInfo",
    "encryptionAlgorithm"
  ],
  mapper: {
    serializedName: "x-ms-encryption-algorithm",
    type: {
      name: "Enum",
      allowedValues: [
        "AES256"
      ]
    }
  }
};
export const encryptionKey: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "cpkInfo",
    "encryptionKey"
  ],
  mapper: {
    serializedName: "x-ms-encryption-key",
    type: {
      name: "String"
    }
  }
};
export const encryptionKeySha256: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "cpkInfo",
    "encryptionKeySha256"
  ],
  mapper: {
    serializedName: "x-ms-encryption-key-sha256",
    type: {
      name: "String"
    }
  }
};
export const group: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "group"
  ],
  mapper: {
    serializedName: "x-ms-group",
    type: {
      name: "String"
    }
  }
};
export const ifMatch: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifMatch"
  ],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const ifModifiedSince: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifModifiedSince"
  ],
  mapper: {
    serializedName: "If-Modified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const ifNoneMatch: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifNoneMatch"
  ],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};
export const ifSequenceNumberEqualTo: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-eq",
    type: {
      name: "Number"
    }
  }
};
export const ifSequenceNumberLessThan: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThan"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-lt",
    type: {
      name: "Number"
    }
  }
};
export const ifSequenceNumberLessThanOrEqualTo: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThanOrEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-le",
    type: {
      name: "Number"
    }
  }
};
export const ifUnmodifiedSince: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifUnmodifiedSince"
  ],
  mapper: {
    serializedName: "If-Unmodified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const include0: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "include"
  ],
  mapper: {
    serializedName: "include",
    type: {
      name: "Enum",
      allowedValues: [
        "metadata"
      ]
    }
  }
};
export const include1: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "include"
  ],
  mapper: {
    serializedName: "include",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: [
            "copy",
            "deleted",
            "metadata",
            "snapshots",
            "uncommittedblobs"
          ]
        }
      }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Csv
};
export const leaseId0: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "leaseAccessConditions",
    "leaseId"
  ],
  mapper: {
    serializedName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};
export const leaseId1: coreHttp.OperationParameter = {
  parameterPath: "leaseId",
  mapper: {
    required: true,
    serializedName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};
export const listType: coreHttp.OperationQueryParameter = {
  parameterPath: "listType",
  mapper: {
    required: true,
    serializedName: "blocklisttype",
    defaultValue: 'committed',
    type: {
      name: "Enum",
      allowedValues: [
        "committed",
        "uncommitted",
        "all"
      ]
    }
  }
};
export const marker0: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "marker"
  ],
  mapper: {
    serializedName: "marker",
    type: {
      name: "String"
    }
  }
};
export const marker1: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "marker"
  ],
  mapper: {
    serializedName: "continuation",
    type: {
      name: "String"
    }
  }
};
export const maxPageSize: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxPageSize"
  ],
  mapper: {
    serializedName: "maxresults",
    constraints: {
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxSize: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "appendPositionAccessConditions",
    "maxSize"
  ],
  mapper: {
    serializedName: "x-ms-blob-condition-maxsize",
    type: {
      name: "Number"
    }
  }
};
export const metadata: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "metadata"
  ],
  mapper: {
    serializedName: "x-ms-meta",
    type: {
      name: "Dictionary",
      value: {
        type: {
          name: "String"
        }
      }
    },
    headerCollectionPrefix: "x-ms-meta-"
  }
};
export const multipartContentType: coreHttp.OperationParameter = {
  parameterPath: "multipartContentType",
  mapper: {
    required: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};
export const owner: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "owner"
  ],
  mapper: {
    serializedName: "x-ms-owner",
    type: {
      name: "String"
    }
  }
};
export const pageWrite0: coreHttp.OperationParameter = {
  parameterPath: "pageWrite",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-page-write",
    defaultValue: 'update',
    type: {
      name: "String"
    }
  }
};
export const pageWrite1: coreHttp.OperationParameter = {
  parameterPath: "pageWrite",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-page-write",
    defaultValue: 'clear',
    type: {
      name: "String"
    }
  }
};
export const pathRenameMode: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "pathRenameMode"
  ],
  mapper: {
    serializedName: "mode",
    type: {
      name: "Enum",
      allowedValues: [
        "legacy",
        "posix"
      ]
    }
  }
};
export const posixAcl: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "posixAcl"
  ],
  mapper: {
    serializedName: "x-ms-acl",
    type: {
      name: "String"
    }
  }
};
export const posixPermissions: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "posixPermissions"
  ],
  mapper: {
    serializedName: "x-ms-permissions",
    type: {
      name: "String"
    }
  }
};
export const posixUmask: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "posixUmask"
  ],
  mapper: {
    serializedName: "x-ms-umask",
    type: {
      name: "String"
    }
  }
};
export const prefix: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "prefix"
  ],
  mapper: {
    serializedName: "prefix",
    type: {
      name: "String"
    }
  }
};
export const prevsnapshot: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "prevsnapshot"
  ],
  mapper: {
    serializedName: "prevsnapshot",
    type: {
      name: "String"
    }
  }
};
export const proposedLeaseId0: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "proposedLeaseId"
  ],
  mapper: {
    serializedName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};
export const proposedLeaseId1: coreHttp.OperationParameter = {
  parameterPath: "proposedLeaseId",
  mapper: {
    required: true,
    serializedName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};
export const range0: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "range"
  ],
  mapper: {
    serializedName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};
export const range1: coreHttp.OperationParameter = {
  parameterPath: "range",
  mapper: {
    required: true,
    serializedName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};
export const rangeGetContentCRC64: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "rangeGetContentCRC64"
  ],
  mapper: {
    serializedName: "x-ms-range-get-content-crc64",
    type: {
      name: "Boolean"
    }
  }
};
export const rangeGetContentMD5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "rangeGetContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-range-get-content-md5",
    type: {
      name: "Boolean"
    }
  }
};
export const recursiveDirectoryDelete: coreHttp.OperationQueryParameter = {
  parameterPath: "recursiveDirectoryDelete",
  mapper: {
    required: true,
    serializedName: "recursive",
    type: {
      name: "Boolean"
    }
  }
};
export const rehydratePriority: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "rehydratePriority"
  ],
  mapper: {
    serializedName: "x-ms-rehydrate-priority",
    type: {
      name: "String"
    }
  }
};
export const renameSource: coreHttp.OperationParameter = {
  parameterPath: "renameSource",
  mapper: {
    required: true,
    serializedName: "x-ms-rename-source",
    type: {
      name: "String"
    }
  }
};
export const requestId: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "requestId"
  ],
  mapper: {
    serializedName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};
export const resource: coreHttp.OperationQueryParameter = {
  parameterPath: "resource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "resource",
    defaultValue: 'directory',
    type: {
      name: "String"
    }
  }
};
export const restype0: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'service',
    type: {
      name: "String"
    }
  }
};
export const restype1: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'account',
    type: {
      name: "String"
    }
  }
};
export const restype2: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'container',
    type: {
      name: "String"
    }
  }
};
export const sequenceNumberAction: coreHttp.OperationParameter = {
  parameterPath: "sequenceNumberAction",
  mapper: {
    required: true,
    serializedName: "x-ms-sequence-number-action",
    type: {
      name: "Enum",
      allowedValues: [
        "max",
        "update",
        "increment"
      ]
    }
  }
};
export const snapshot: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "snapshot"
  ],
  mapper: {
    serializedName: "snapshot",
    type: {
      name: "String"
    }
  }
};
export const sourceContentCrc64: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceContentCrc64"
  ],
  mapper: {
    serializedName: "x-ms-source-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};
export const sourceContentMD5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-source-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};
export const sourceIfMatch: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-match",
    type: {
      name: "String"
    }
  }
};
export const sourceIfModifiedSince: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfModifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-modified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const sourceIfNoneMatch: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match",
    type: {
      name: "String"
    }
  }
};
export const sourceIfUnmodifiedSince: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfUnmodifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-unmodified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const sourceLeaseId: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceLeaseId"
  ],
  mapper: {
    serializedName: "x-ms-source-lease-id",
    type: {
      name: "String"
    }
  }
};
export const sourceRange0: coreHttp.OperationParameter = {
  parameterPath: "sourceRange",
  mapper: {
    required: true,
    serializedName: "x-ms-source-range",
    type: {
      name: "String"
    }
  }
};
export const sourceRange1: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "sourceRange"
  ],
  mapper: {
    serializedName: "x-ms-source-range",
    type: {
      name: "String"
    }
  }
};
export const sourceUrl: coreHttp.OperationParameter = {
  parameterPath: "sourceUrl",
  mapper: {
    required: true,
    serializedName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};
export const tier0: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "tier"
  ],
  mapper: {
    serializedName: "x-ms-access-tier",
    type: {
      name: "String"
    }
  }
};
export const tier1: coreHttp.OperationParameter = {
  parameterPath: "tier",
  mapper: {
    required: true,
    serializedName: "x-ms-access-tier",
    type: {
      name: "String"
    }
  }
};
export const timeoutInSeconds: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "timeoutInSeconds"
  ],
  mapper: {
    serializedName: "timeout",
    constraints: {
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const transactionalContentCrc64: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "transactionalContentCrc64"
  ],
  mapper: {
    serializedName: "x-ms-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};
export const transactionalContentMD5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "transactionalContentMD5"
  ],
  mapper: {
    serializedName: "Content-MD5",
    type: {
      name: "ByteArray"
    }
  }
};
export const upn: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "upn"
  ],
  mapper: {
    serializedName: "upn",
    type: {
      name: "Boolean"
    }
  }
};
export const url: coreHttp.OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    required: true,
    serializedName: "url",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const version: coreHttp.OperationParameter = {
  parameterPath: "version",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-version",
    defaultValue: '2019-02-02',
    type: {
      name: "String"
    }
  }
};
export const xMsRequiresSync: coreHttp.OperationParameter = {
  parameterPath: "xMsRequiresSync",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-requires-sync",
    defaultValue: 'true',
    type: {
      name: "String"
    }
  }
};