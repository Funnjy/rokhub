import { xmlRequest } from "./xmlRequest";

/**
 * Get alliance request.
 * 
 * @param {string} id 
 * @returns {Object} {
 *                        payload: {
 *                             id: string,
 *                             tag: string,
 *                             name: string,
 *                             description: string,
 *                             leader: string,
 *                             members: array,
 *                             countMembers: string
 *                        }
 *                   }
 */
export async function getAlliance(id) {
    const result = await xmlRequest('/alliance/', 'get', { id });
    return result;
}