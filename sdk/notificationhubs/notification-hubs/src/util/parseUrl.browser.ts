// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @internal
 * @ignore
 * @param {string} rawUrl
 * @returns
 */
export function parseUrl(rawUrl: string): any {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore: "self" will exist in the browser.
  return new self.URL(rawUrl);
}