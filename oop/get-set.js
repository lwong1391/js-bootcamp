const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
        this.locations.push(this._location)
    }
}

// code that uses the data object
data.location = '     New York  ';
data.location = '  Colorado '
console.log(data) 
console.log(data.location)
console.log(data.locations)