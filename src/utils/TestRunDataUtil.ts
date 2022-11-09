import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Test Run data for e2e tests.
 *
 *  The utils based on the JSON obejct recieved eather by filling it in the ./TestRunData.json
 *  for local test run or downloading it from S3 bucket.
 *  While there might be various data, next fields are required for AccountUtil to work:
 *  Defines an interface for test run data object
 *  @description - *optional* field used for describe the object for documentation
 *  @dataTag - *mandatory* object identified in tests by TEST_DATA_TAG environment variable value
 *  @cloudName - *mandatory* test cloud name
 *  @apiKey - *mandatory* test api key for api execution
 *  @apiSecret - *mandatory* test api secret for api execution
 *  @apiDomain - *mandatory* api domain example: 'api.staging.cloudinary.com'
 *  #Provisioning keys for required for user/groups/clouds creation via provisioning api
 *  @provisioningKey
 *  @provisioningSecret
 *  @provisioningAccountId
 *  @default_account_id - *mandatory* default test account id
 */
class TestRunDataUtil {
  private testRunDataArray;
  private setDataArray() {
    if (!Array.isArray(this.testRunDataArray)) {
      const dataFilePath = path.resolve(process.cwd(), './TestRunData.json');
      console.log('dataFilePath', dataFilePath);
      if (dataFilePath === undefined) {
        throw new Error('Path to data file is incorrect');
      }
      this.testRunDataArray = require(dataFilePath);
    }
  }

  /**
   * Get getTestRunData according to dataTag.
   * If not dataTag passed will return according to dataTag set as env variable
   * @param dataTag
   */
  public getData(dataTag: string = process.env.TEST_DATA_TAG) {
    this.setDataArray();
    return this.getTestRunDataFromList(dataTag);
  }

  /**
   * Get testRunData from testRunDataArray according to passed dataTag value
   * in case dataTag is undefined or no data fit dataTag error will be thrown
   * @param dataTag value for data identification
   */
  private getTestRunDataFromList(dataTag: string) {
    const testRunData = this.testRunDataArray.find((data) => data.dataTag === dataTag);

    if (testRunData === undefined) {
      throw new Error(`Couldn't find TestRunData by dataTag='${dataTag}'.\n Make sure your .env file has TEST_DATA_TAG=value`);
    }

    return testRunData;
  }
}

const testRunDataUtil: TestRunDataUtil = new TestRunDataUtil();
export { testRunDataUtil };
