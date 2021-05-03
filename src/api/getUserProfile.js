import { xmlRequest } from "./xmlRequest";

/**
 * Get user profile.
 * 
 * @param {string} id 
 * @returns {Object} {
 *                        payload: {
 *                             id: string,
 *                             governorId: string,
 *                             nickname: string,
 *                             alliance: string
 *                        }
 *                   }
 */
export async function getUserProfile(id) {
    const result = await xmlRequest('/users/user', 'get', { id });
    
    return result;
}