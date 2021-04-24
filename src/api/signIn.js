import { xmlRequest } from './xmlRequest';
import jwt_decode from 'jwt-decode';

/**
 * Auth request.
 * 
 * @param {Object} userData {
 *                               nickname: string,
 *                               password: string
 *                          }
 * @returns {Object} {
 *                        payload: {
 *                             id: number,
 *                             governorId: number,
 *                             nickname: string
 *                             accessToken: string,
 *                             alliance: string,
 *                             ordersToAlliances: array,
 *                             exp: number
 *                        }
 *                   }
 */
export async function signIn(userData) {
    const result = await xmlRequest('/login/', 'get', userData);
    return result;
}