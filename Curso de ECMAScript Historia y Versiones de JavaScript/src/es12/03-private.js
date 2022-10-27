class User {
    greeting() {
        return 'Hello';
    };
};

const newGreeting = new User();
console.log(newGreeting.greeting());

class User {
    constructor() {
        console.log('Nuevo Usuario');
    }

    greeting() {
        return 'Hello';
    };
}

const alan = new User();

class User {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    };
}

const lucas = new User('Lucas');
console.log(lucas.greeting());

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    };

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const data = new User('Alan', 25);
console.log(data.uAge);
console.log(data.uAge = 26);
