const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("hey!!");
        } else {
            reject ( "whooooops!");
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));
