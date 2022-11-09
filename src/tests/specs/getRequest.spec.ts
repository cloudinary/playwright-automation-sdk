import { RequestUtils } from '../../index';
import { expect, test } from '@playwright/test';
import { Reporter } from '../../index';

test.describe('GET request', () => {
  test('url only', async ({ request }) => {
    Reporter.info('Test get url without options');
    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');

    Reporter.info('Validate return status is 200');
    expect(response.status()).toEqual(200);
  });

  test('base url only', async ({ request }) => {
    const response = await RequestUtils.getRequest(request, '');
    expect(response.status()).toEqual(200);
  });

  test('with options', async ({ request }) => {
    try {
      await RequestUtils.getRequest(request, '', { timeout: 1 });
    } catch (error) {
      expect(String(error)).toContain('Request timed out after 1ms');
    }
  });
});
