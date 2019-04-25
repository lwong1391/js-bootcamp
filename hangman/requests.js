// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done

// Making HTTP request

const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(`Unable to fetch puzzle. Status: ${response.status}`) 
        }
    }).then((data) => {
        return data.puzzle
    })
}

// find country name
const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
        if (response.status === 200) { 
            return response.json()
        } else {
            throw new Error('Unable to fetch country data')
        }
    }).then((countries) => {   
        return countries.find((country) => country.alpha2Code === countryCode); 
    })
}

// find location
const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=c3ba0d29663b21').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to find your location.')
        }
    })
}