import { expect } from '@playwright/test';
import { Reporter } from '../reporter/Reporter';
import { inspect } from 'util';

export namespace ValidationUtils {
  export function validateStatus(response, expectedStatus: number): void {
    Reporter.debug(`Validate return status is: ${expectedStatus}`);
    expect(response.status()).toEqual(expectedStatus);
  }
  export function validateData(response, expectedData: object): void {
    Reporter.debug(`Validate response contains next data: ${inspect(expectedData)}`);

    for (const k in expectedData) {
      const value = expectedData[k];
      Reporter.debug(`Validate ${k} and ${value} in response`);
      value ? expect(response).toHaveProperty(k, value) : expect(response).toHaveProperty(k);
    }
  }
}
