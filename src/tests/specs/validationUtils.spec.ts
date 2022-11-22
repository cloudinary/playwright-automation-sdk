import { expect, test } from '@playwright/test';
import { Reporter } from '../../index';
import { ValidationUtils } from '../../utils/ValidationUtils';
test.describe('Validation utils', () => {
  test('validate status correct', async () => {
    Reporter.info('Validate return status is 200');
    await ValidationUtils.validateStatus(
      {
        status: () => {
          return 200;
        },
      },
      200
    );
  });

  test('validate status incorrect', async () => {
    Reporter.info('Validate return status is 205');
    expect(() => {
      ValidationUtils.validateStatus(
        {
          status: () => {
            return 200;
          },
        },
        205
      );
    }).toThrow();
  });

  test('Validate received data correct', async () => {
    Reporter.info('Validate return status contains object');
    await ValidationUtils.validateData(
      {
        statusText: 'OK',
      },
      { statusText: 'OK' }
    );
  });

  test('Validate received data value=null correct', async () => {
    Reporter.info('Validate return status contains object');
    await ValidationUtils.validateData(
      {
        statusText: 'OK',
      },
      { statusText: null }
    );
  });

  test('Validate received data value-undefined correct', async () => {
    Reporter.info('Validate return status contains object');
    await ValidationUtils.validateData(
      {
        statusText: 'OK',
      },
      { statusText: undefined }
    );
  });
});
