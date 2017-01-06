// class
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

let person = new Person('Ram');
console.log(person.getName());
person.setName('Shyam');
console.log(person.getName());

// getter and setter
class AnotherPerson {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }
}


let anotherPerson = new AnotherPerson('Hari');
console.log(anotherPerson.name);
anotherPerson.name = 'Om';
console.log(anotherPerson.name);

//static variable and method

class AwesomeLib {
    static version = `0.0.1`;
    static desc = () => 'This is awesome library';
}

console.log(AwesomeLib.version);
console.log(AwesomeLib.desc());



//inheritance

class Father{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this.name;
    }
}

class Son extends Father{
    constructor(name, phoneNumber){
        super(name)
        this.phoneNumber = phoneNumber;
    }

    get phoneNumber(){
        return this.phoneNumber;
    }
}


let sonObj = new Son("Ram", "42352435");
console.log(sonObj.name);
console.log(sonObj.phoneNumber);