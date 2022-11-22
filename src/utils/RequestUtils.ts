import { APIRequestContext, APIResponse, request } from '@playwright/test';
import { inspect } from 'util';
import { IDeleteOptions, IGetOptions, IHeadOptions, IPostOptions, IPutOptions, Reporter } from '../index';

/**
 * Wraps playwright request API for cleaner api and adds additional functionality such as Reporter
 */

enum RequestType {
  GET = 'GET',
  POST = 'POST',
  HEAD = 'HEAD',
  DELETE = 'DELETE',
  PUT = 'PUT',
}
/**
 * Helper function creates user friendly log message
 * @param requestType - type of request to log
 * @param url - request url
 * @param options - request options
 * @private
 */
function prepareLogMessage(requestType: RequestType, url: string, options: IGetOptions | IDeleteOptions | IHeadOptions | IPostOptions): string {
  return `Sending '${requestType}' request to url: '${url}' ${options !== undefined ? `with options:\n ${inspect(options)}` : ''}`;
}

export namespace RequestUtils {
  /**
   * Creates new instances of [APIRequestContext].
   *
   * @param options for new context
   */
  export async function getRequestContext(options?) {
    Reporter.debug(`Creating new request context ${options !== undefined ? `with options:\n ${inspect(options)}` : ''}`);
    return request.newContext(options);
  }

  /**
   * Sends HTTP(S) GET request and returns its response.
   * The method will populate request cookies from the context and update context cookies from the response.
   * The method will automatically follow redirects.
   * @param request request context
   * @param url request end point, It will be linked to base url from config file
   * @param options - options for request(optional)
   */
  export async function getRequest(request: APIRequestContext, url: string, options?: IGetOptions): Promise<any> {
    Reporter.debug(prepareLogMessage(RequestType.GET, url.toString(), options));
    return request.get(url, options);
  }

  /**
   * Sends HTTP(S) POST request and returns its response.
   * The method will populate request cookies from the context and update context cookies from the response.
   * The method will automatically follow redirects.
   * @param request request context
   * @param url request end point, It will be linked to base url from config file
   * @param options - options for request(optional)
   */
  export async function postRequest(request: APIRequestContext, url: string, options?: IPostOptions): Promise<APIResponse> {
    Reporter.debug(prepareLogMessage(RequestType.POST, url, options));
    return request.post(url, options);
  }

  /**
   * Sends HTTP(S) PUT request and returns its response.
   * The method will populate request cookies from the context and update context cookies from the response.
   * The method will automatically follow redirects.
   * @param request request context
   * @param url request end point, It will be linked to base url from config file
   * @param options - options for request(optional)
   */
  export async function putRequest(request: APIRequestContext, url: string, options?: IPutOptions): Promise<APIResponse> {
    Reporter.debug(prepareLogMessage(RequestType.PUT, url, options));
    return request.put(url, options);
  }

  /**
   * Sends HTTP(S) HEAD request and returns its response.
   * The method will populate request cookies from the context and update context cookies from the response.
   * The method will automatically follow redirects.
   * @param request request context
   * @param url request end point, It will be linked to base url from config file
   * @param options - options for request(optional)
   */
  export async function headRequest(request: APIRequestContext, url: string, options?: IHeadOptions): Promise<APIResponse> {
    Reporter.debug(prepareLogMessage(RequestType.HEAD, url, options));
    return request.head(url, options);
  }

  /**
   * Sends HTTP(S) DELETE request and returns its response.
   * The method will populate request cookies from the context and update context cookies from the response.
   * The method will automatically follow redirects.
   * @param request request context
   * @param url request end point, It will be linked to base url from config file
   * @param options - options for request(optional)
   */
  export async function deleteRequest(request: APIRequestContext, url: string, options?: IDeleteOptions): Promise<APIResponse> {
    Reporter.debug(prepareLogMessage(RequestType.DELETE, url, options));
    return request.delete(url, options);
  }
}
