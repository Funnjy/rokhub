import { xmlRequest } from './xmlRequest';
import jwt_decode from 'jwt-decode';

/**
 * Auth request.
 * 
 * @param {Object} candidateData {
 *                               nickname: string,
 *                               password: string
 *                          }
 * @returns {Object} {
 *                        payload: {
 *                             id: number,
 *                             exp: number,
 *                             alliance: string || null,
 *                             ordersToAlliances: array,
 *                             accessToken: string
 *                        }
 *                   }
 */
export async function signIn(candidateData) {
    /**
     * Payload of access token has {
     *                      id: number,
     *                      exp: number,
     *                      alliance: string || null,
     *                      ordersToAlliances: array
     *                  }
     */
    const result = await xmlRequest('/login/', 'get', candidateData);
    const userData = { payload: { accessToken: result.payload.accessToken, ...jwt_decode(result.payload.accessToken) } };

    return userData;
}