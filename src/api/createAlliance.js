import { xmlRequest } from "./xmlRequest";

/**
 * Create alliance request.
 * 
 * @param {Object} allianceData {
 *                                  tag: string,
 *                                  name: string,
 *                                  description: string
 *                              }
 * @returns {Object} { }
 */
export async function createAlliance(allianceData) {
    const result = await xmlRequest('/alliance/', 'post', allianceData);

    return result;
}