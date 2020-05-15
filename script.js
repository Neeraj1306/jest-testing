const googleDatabase =[
    'qwe.com',
    'asd.com',
    'zxc.com',
    'mnb.com',
    'qwerty.com',
    'qwertyuiop.com'
];

const googleSearch = (searchInput, db) => {
    const matches = googleDatabase.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

// console.log((googleSearch('qwe', googleDatabase)));

module.exports = googleSearch