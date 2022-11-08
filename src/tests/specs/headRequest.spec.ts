import { RequestUtils } from '../../index';
import { expect, test } from '@playwright/test';

test.describe('GET request', () => {
  test('url only', async ({ request }) => {
    const response = await RequestUtils.headRequest(request, 'docs/test-api-testing#writing-api-test');
    expect(response.status()).toEqual(200);
  });

  test('base url only', async ({ request }) => {
    const response = await RequestUtils.headRequest(request, '');
    expect(response.status()).toEqual(200);
  });

  test('with options', async ({ request }) => {
    try {
      await RequestUtils.headRequest(request, '', { timeout: 1 });
    } catch (error) {
      expect(String(error)).toContain('Request timed out after 1ms');
    }
  });
});
