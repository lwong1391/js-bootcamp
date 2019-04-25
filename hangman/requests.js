// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done

// Making HTTP request

const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
        
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject(`An error has taken place. Status: ${e.target.status}`) 
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    // The send method is what initializes the entire process. The event handler callback for readystatechange doesn't fire until send is called because that state wouldn't have changed until the processes was started.
    request.send()
})
    

// find country name
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    
    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countries = JSON.parse(e.target.responseText);
            const country = countries.find((country) => country.alpha2Code === countryCode);
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('Unable to fetch country data')
        }
    })       
    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
    countryRequest.send()
})
 