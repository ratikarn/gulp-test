export class User {
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

export class Register {
    static save() {
        console.log('save success');
    }
}
