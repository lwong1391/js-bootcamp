// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done

// Making HTTP request

const getPuzzle = async (wordCount) => { 
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {});

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// find country name
const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all', {});
     
    if (response.status === 200) {  
        const countries = await response.json();
        return countries.find((country) => country.alpha2Code === countryCode); 
    } else {
        throw new Error('Unable to fetch country data')
    }   
} 

// find location
const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=c3ba0d29663b21');
    
    if (response.status === 200) {
        return await response.json(); 
    } else {
        throw new Error('Unable to find your location.')
    } 
}

// get current country
const getCurrentCountry = async () => {
    const location = await getLocation(); 
    return getCountry(location.country);
}