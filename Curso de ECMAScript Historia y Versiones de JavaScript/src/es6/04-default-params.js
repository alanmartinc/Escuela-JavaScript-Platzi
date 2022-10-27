function newUser(name, age, country) {
    var name = name || "Àlexa";
    var age = age || 24;
    var country = country || "COL";
    console.log(name, age, country);
}

newUser();
newUser("Oscar", 34, "MX");

function newAdmin(name = "Alexa", age = 24, country = "COL") {
    console.log(name, age, country);
}

newAdmin()
newAdmin("Oscar", 34, "MX");
