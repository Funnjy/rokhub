import { store } from './../store/store';

/**
 * Request to server.
 * 
 * @param {string} url 
 * @param {string} method 
 * @param {Object} data 
 * @returns {Object}
 */
function xmlRequest(url, method, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Authorization', `Bearer ${store.getState().user.accessToken}`);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        xhr.onload = () => {
            (xhr.status === 200 || xhr.status === 201) ? resolve(JSON.parse(xhr.response)) : reject(JSON.parse(xhr.response));
        };
        xhr.send(data);
    });
}

export { xmlRequest };