import { xmlRequest } from './xmlRequest';

/**
 * Registration request.
 * 
 * @param {Object} userData {
 *                              nickname: string,
 *                              governorId: string,
 *                              password: string,
 *                              repeatPassword: string,
 *                              email: string
 *                          }
 * @returns {Object} {}
 */
export async function signUp(userData) {
    const result = await xmlRequest('/login/', 'post', userData);
    return result;
}