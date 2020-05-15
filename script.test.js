const googleSearch = require('./script')

const mockDB = [
    'qwerty.com',
    'asdfg.com',
    'zxcvb.com',
    'mnbvc.com',
    'qwertyui.com',
    'qwertyuiopasd.com'
]
it('this is a test', () => {
    expect('hello').toBe('hello'); 
})

it('this is a test', () => {
    expect(googleSearch('hgkjkj', mockDB)).toEqual([]); 
    expect(googleSearch('mnb', mockDB)).toEqual(['mnbvc.com']); 
})