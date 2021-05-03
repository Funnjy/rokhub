import { xmlRequest } from "./xmlRequest";
import jwt_decode from "jwt-decode";

/**
 * Get the new accessToken.
 * 
 * @returns {Object} {
 *                        payload: {
 *                             accessToken: string || null,
 *                        }
 *                   }
 */
export async function updateTokens() {
    const result = await xmlRequest('/tokens', 'get', { });
    const userData = { payload: { accessToken: result.payload.accessToken, ...jwt_decode(result.payload.accessToken) } };

    return userData;
}