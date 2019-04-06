let name = 'Andrew';

if (true) {
    let name = 'Mike';

    if (true) {
        name = 'Jen';   // this is replacing Mike to Jen
        console.log(name);  // Mike   variable shadowing the parent
    }
}

if (true) {
    console.log(name);      // Andrew
}