import { xmlRequest } from "./xmlRequest";

/**
 * Get alliance request.
 * 
 * @param {number} id 
 * @returns {Object} {
 *                        payload: {
 *                             id: number,
 *                             tag: string,
 *                             name: string,
 *                             description: string,
 *                             leaderId: string,
 *                             members: array,
 *                             countMembers: number
 *                        }
 *                   }
 */
export async function getAlliance(id) {
    const result = await xmlRequest('/alliance', 'get', { id });

    return result;
}