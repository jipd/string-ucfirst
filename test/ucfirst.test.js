import ucfirst from '../lib/index'

test('converts first letter of string to uppercase ignoring the rest of the string', () => {
    expect(ucfirst('apple')).toBe('Apple')
    expect(ucfirst('Apple')).toBe('Apple')
    expect(ucfirst('ApplE')).toBe('ApplE')
})
