import { ConsoleReport } from './ConsoleReport';

/**
 * Reporter API
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Reporter {
  /**
   * Log info message
   * @param msg text to log
   */
  export function info(msg: string): void {
    ConsoleReport.info(msg);
  }

  /**
   * Log info message
   * @param msg text to log
   */
  export function debug(msg: string): void {
    ConsoleReport.debug(msg);
  }
}
