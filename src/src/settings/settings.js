/**
 * Check a value of elements.
 * Return the error message or null.
 * Param args[0] have password, it needs to compare passwords.
 * 
 * @param {string} key element id
 * @param {string} value element value
 * @returns {string || null}
 */
function validateUserValue(key, value, ...args) {
    const settings = {
        nickname: !(/^[A-Za-zА-Яа-я0-9]{2,15}$/.test(value)) ? 'Введен не корректный никнейм' : null,
        governorId: !(/^\d{8}$/.test(value)) ? 'Разрешены только цифры длиной 8 символов' : null,
        password: (value.length <= 6) ? 'Слишком короткий пароль' : null,
        repeatPassword: value !== args[0] ? 'Пароли не совпадают' : null,
        email: !(/^\w+[@]\w+[.]\w+$/.test(value)) ? 'Введен не корректный email' : null
    };

    return settings[key];
}

/**
 * Check a value of elements.
 * Return the error message or null.
 * 
 * @param {string} key element id
 * @param {string} value element value
 * @returns {string || null}
 */
function validateAllianceValue(key, value) {
    const settings = {
        tag: !(/^[A-Za-z0-9]{2,5}$/.test(value)) ? 'Введен не корректный тэг' : null,
        name: !(/^[A-Za-z0-9]{2,10}$/.test(value)) ? 'Введено не корректное имя' : null,
        description: !(/^[A-Za-zА-Яа-я0-9\s]{2,100}$/.test(value)) ? 'Введено не корректное описание' : null
    }

    return settings[key];
}

export { validateUserValue, validateAllianceValue };