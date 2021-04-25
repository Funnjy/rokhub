import { validateValue } from './settings';

it('Check nickname', () => {
    expect(validateValue('nickname', '')).not.toBeNull();
    expect(validateValue('nickname', ' ')).not.toBeNull();
    expect(validateValue('nickname', '  ')).not.toBeNull();
    expect(validateValue('nickname', '   ')).not.toBeNull();
    expect(validateValue('nickname', 'aw')).not.toBeNull();
    expect(validateValue('nickname', '@@@@')).not.toBeNull();
    expect(validateValue('nickname', '@@!э')).not.toBeNull();
    expect(validateValue('nickname', 'aw3')).toBeNull();
    expect(validateValue('nickname', 'aw3awfw')).toBeNull();
    expect(validateValue('nickname', '23456')).toBeNull();
});

it('Check governor ID', () => {
    expect(validateValue('governorId', '')).not.toBeNull();
    expect(validateValue('governorId', '1')).not.toBeNull();
    expect(validateValue('governorId', '12')).not.toBeNull();
    expect(validateValue('governorId', '123')).not.toBeNull();
    expect(validateValue('governorId', '1234')).not.toBeNull();
    expect(validateValue('governorId', '12345')).not.toBeNull();
    expect(validateValue('governorId', '123456')).not.toBeNull();
    expect(validateValue('governorId', '1234567')).not.toBeNull();
    expect(validateValue('governorId', '12345678')).toBeNull();
    expect(validateValue('governorId', 'a')).not.toBeNull();
    expect(validateValue('governorId', 'aasdfwer')).not.toBeNull();
});

it('Check password', () => {
    expect(validateValue('password', '1ade')).not.toBeNull();
    expect(validateValue('password', '1ade43')).not.toBeNull();
    expect(validateValue('password', '1ade435')).toBeNull();
});

it('Check email', () => {
    expect(validateValue('email', '34rarar')).not.toBeNull();
    expect(validateValue('email', '34rarar@')).not.toBeNull();
    expect(validateValue('email', '34rarar@ewa')).not.toBeNull();
    expect(validateValue('email', '34rarar@ewa.')).not.toBeNull();
    expect(validateValue('email', '34ra@rar@ewa.ru')).not.toBeNull();
    expect(validateValue('email', '34ra@rar@.ewa.ru')).not.toBeNull();
    expect(validateValue('email', '@34ra.ru')).not.toBeNull();
    expect(validateValue('email', '34rarar@ewa.ru')).toBeNull();
});
