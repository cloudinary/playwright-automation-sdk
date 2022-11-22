import { RequestUtils } from '../../index';
import { expect, test } from '@playwright/test';
import { Reporter } from '../../index';
import { ValidationUtils } from '../../utils/ValidationUtils';
//todo use mock for responses
test.describe('Validation utils', () => {
  test('validate status correct', async ({ request }) => {
    Reporter.info('Send get request');
    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');

    Reporter.info('Validate return status is 200');
    await ValidationUtils.validateStatus(response, 200);
  });

  test('validate status incorrect', async ({ request }) => {
    Reporter.info('Send get request');
    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');

    Reporter.info('Validate return status is 205');
    expect(() => {
      ValidationUtils.validateStatus(response, 205);
    }).toThrow();
  });

  test('Validate received data correct', async ({ request }) => {
    Reporter.info('Send get request');
    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');
    Reporter.info('Validate return status contains object');
    await ValidationUtils.validateData(response, { '_initializer.statusText': 'OK' });
  });

  test('Validate received data value=null correct', async ({ request }) => {
    Reporter.info('Send get request');
    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');
    Reporter.info('Validate return status contains object');
    await ValidationUtils.validateData(response, { '_initializer.statusText': null });
  });

  test('Validate received data value-undefined correct', async ({ request }) => {
    Reporter.info('Send get request');
    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');
    Reporter.info('Validate return status contains object');
    await ValidationUtils.validateData(response, { '_initializer.statusText': undefined });
  });

  test('Validate received inner data correct', async ({ request }) => {
    Reporter.info('Send get request');
    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');

    Reporter.info('Validate return status contains object');
    await ValidationUtils.validateData(response._headers._headersArray[0], { name: 'Connection', value: 'close' });
  });
});
