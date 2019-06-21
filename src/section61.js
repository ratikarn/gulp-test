class User {
    constructor() {
        this.result = [];
    }

    addUser(user = []) {
        this.result.push(user);
    }
    delUser() {
        this.result.pop();
    } 
    showUser() {
        for (let v of this.result) {
            console.log(v);
            
        }
    }
}

let a = new User ();
a.addUser(['Ploy','a@gmail.com']);
a.addUser(['Moo','b@gmail.com']);
a.addUser(['PB','c@gmail.com']);
a.showUser();
a.delUser();
a.showUser();
