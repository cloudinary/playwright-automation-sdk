export interface IGetOptions {
  /**
   * Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes.
   */
  failOnStatusCode?: boolean;

  /**
   * Allows to set HTTP headers.
   */
  headers?: { [key: string]: string };

  /**
   * Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.
   */
  ignoreHTTPSErrors?: boolean;

  /**
   * Query parameters to be sent with the URL.
   */
  params?: { [key: string]: string | number | boolean };

  /**
   * Request timeout in milliseconds. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
   */
  timeout?: number;
}
