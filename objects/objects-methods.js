let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) { 
        let seatLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatLeft;
    },
    seatParty: function(partySize)  {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize) {
        this.guestCount =  this.guestCount - partySize;
    }
}  
 
restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
console.log(restaurant.guestCount);

restaurant.removeParty(5);
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(4));
