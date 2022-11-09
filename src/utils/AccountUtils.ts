import { APIResponse } from '@playwright/test';
import { inspect } from 'util';
import { getRandomString, Reporter, RequestUtils, testRunDataUtil } from '../index';

/**
 * Util to manage accounts in cloudinary test customer.
 * For more information see: https://cloudinary.com/documentation/provisioning_api
 * Test customer should be 'pre-defined' and it's data passed in TestRunData.json in the root directory
 * todo: add update account settings function(and a settings builder)
 */
class AccountUtil {
  /**
   * Url for sub accounts provision api requests
   */
  private static getAccountsProvisionApiUrl(): string {
    return `${AccountUtil.getProvisionApiUrl()}/sub_accounts`;
  }

  /**
   * Generate provisioning api url based on testRunData
   * @private
   */
  private static getProvisionApiUrl(): string {
    const testRunData = testRunDataUtil.getData();
    return `https://${testRunData.provisioningKey}:${testRunData.provisioningSecret}@${testRunData.apiDomain}/v1_1/provisioning/accounts/${testRunData.provisioningAccountId}/`;
  }
  /**
   * Create sub account using api.
   * One is responsible to deleted new accounts after test
   * todo: consider to path full config object to the new cloud instead of creating account and update it settings latter
   * @param name *optional* new sub account name
   */
  public async createSubAccount(name?: string): Promise<APIResponse> {
    const options = {
      data: {
        name: name ? name : getRandomString(10, true).toLowerCase(),
      },
    };

    Reporter.debug(`Creating new sub account with name ${options.data.name}`);
    const createAccountResponse = await RequestUtils.postRequest(
      await RequestUtils.getRequestContext(),
      `${AccountUtil.getAccountsProvisionApiUrl()}`,
      options
    );

    Reporter.debug(`New sub account data: '${inspect(await createAccountResponse.json())}'`);
    return createAccountResponse;
  }

  /**
   * Delete sub account using api
   */
  public async deleteSubAccount(subAccountId: string) {
    Reporter.debug(`Deleting sub account with id ${subAccountId}`);
    const deleteAccountResponse = await RequestUtils.deleteRequest(
      await RequestUtils.getRequestContext(),
      `${AccountUtil.getAccountsProvisionApiUrl()}/${subAccountId}`
    );

    Reporter.debug(`Sub account with id ${subAccountId} was deleted with response: '${inspect(await deleteAccountResponse.json())}'`);
  }

  /**
   * Disable sub account using api
   */
  public async disableSubAccount(subAccountId: string) {
    Reporter.debug(`Disabling sub account with id ${subAccountId}`);
    const disableSubAccountResponse = await RequestUtils.putRequest(
      await RequestUtils.getRequestContext(),
      `${AccountUtil.getAccountsProvisionApiUrl()}/${subAccountId}`,
      {
        data: { enabled: false },
      }
    );
    Reporter.debug(`Sub account with id ${subAccountId} was disabled with response: '${inspect(await disableSubAccountResponse.json())}'`);
  }
}
const accountUtils: AccountUtil = new AccountUtil();
export { accountUtils };
