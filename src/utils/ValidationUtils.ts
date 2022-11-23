import { expect } from '@playwright/test';
import { Reporter } from '../reporter/Reporter';
import { inspect } from 'util';

/**
 * Validation utils for requests
 */
export namespace ValidationUtils {
  /**
   * Validates expected status in response.
   *
   * @param response response for testing
   * @param expectedStatus expected status
   */
  export function validateStatus(response, expectedStatus: number): void {
    Reporter.debug(`Validate return status is: ${expectedStatus}`);
    expect(response.status()).toEqual(expectedStatus);
  }

  /**
   * Validates data existence in response
   * Object of expected data can have both key and value or key only
   * @param response response for testing
   * @param expectedData expected status
   */
  export function validateData(response, expectedData: object): void {
    Reporter.debug(`Validate response contains next data: ${inspect(expectedData)}`);

    for (const k in expectedData) {
      const value = expectedData[k];
      Reporter.debug(`Validate ${k} and ${value} in response`);
      value ? expect(response).toHaveProperty(k, value) : expect(response).toHaveProperty(k);
    }
  }
}
