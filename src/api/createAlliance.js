import { xmlRequest } from "./xmlRequest";

/**
 * Create alliance request.
 * 
 * @param {Object} allianceData {
 *                                  tag: string,
 *                                  name: string,
 *                                  description: string
 *                              }
 * @returns {Object} {
 *                        payload: {
 *                             id: string,
 *                             tag: string,
 *                             name: string,
 *                             description: string,
 *                             leader: string,
 *                             countMembers: string,
 *                             members: []
 *                         }
 *                    }
 */
export async function createAlliance(allianceData) {
    const result = await xmlRequest('/alliance/', 'post', allianceData);
    return result;
}