import { xmlRequest } from "./xmlRequest";

/**
 * Edit alliance.
 * 
 * @param {Object} allianceData {
 *                                  id: number,
 *                                  tag: string,
 *                                  name: string,
 *                                  description: string
 *                              }
 * @returns 
 */
export async function editAlliance(allianceData) {
    const result = await xmlRequest('/alliance', 'patch', allianceData);

    return result;
}