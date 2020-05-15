const fetch = require('node-fetch');
const swapi = require('./script2');

it('get people', () => {
    expect.assertions(2)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

it('getPeople mock', () => {
    const mockFetch = jest.fn()
                          .mockReturnValue(Promise.resolve({
                              json: () => Promise.resolve({
                                  count: 82,
                                  results: [0,1,2,3]
                              })
                          }))
    expect.assertions(4);
    return swapi.getPeople(mockFetch).then( data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/');
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(2);
    })
})