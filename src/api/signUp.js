import { xmlRequest } from './xmlRequest';

/**
 * Registration request.
 * 
 * @param {Object} candidateData {
 *                              nickname: string,
 *                              governorId: number,
 *                              password: string,
 *                              repeatPassword: string,
 *                              email: string
 *                          }
 * @returns {Object}
 */
export async function signUp(candidateData) {
    const result = await xmlRequest('/login/', 'post', candidateData);
    
    return result;
}