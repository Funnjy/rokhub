import { xmlRequest } from "./xmlRequest";
/**
 * Get the new accessToken.
 * 
 * @returns {Object} {
 *                        payload: {
 *                             accessToken: string || null,
 *                             exp: number || null
 *                        }
 *                   }
 */
export async function updateTokens() {
    const result = await xmlRequest('/tokens', 'get', { });
    return result;
}