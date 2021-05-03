import { xmlRequest } from "./xmlRequest";

/**
 * Get alliances request
 * 
 * @returns {Object} {
 *                        payload: {
 *                             alliances: array
 *                        }
 *                   }
 */
export async function getAlliances() {
    const result = await xmlRequest('/alliances', 'get');

    return result;
}