// class, properties, method
class Student {
    constructor(name,grade) {
        this._name = name;
        this._grade = grade;
        
    }

    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }

    set grade(value) {
        this._grade = value;
    }
    get grade() {
        return this._grade;
    }

    showInfo() {
        return 'Hello, ' + this.name + ' Grade: ' + this.grade;
    }
}

let std = new Student('Ploy', 3.25);
std.name = 'john';
std.grade = '3.50';
// console.log(std.name);
console.log(std.showInfo());


// let s = new Student('john', 3.15);
// console.log(s.showInfo());





