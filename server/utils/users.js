
//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    //return user that was removed
    var userToRemove = this.getUser(id);
    if (userToRemove) {
      this.users = this.users.filter((user) => user.id!== id);
    }
    return userToRemove;
  }
  getUser (id) {
    //return the user object
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    //looks for all users name that joined a Room
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};
// class Person {
//   constructor (name, age) { //constructor is a function executed by default
//     this.name = name; //this refers to the instance and not to the class
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }
//
// var me = new Person('Andrew', 23);
//
// var description = me.getUserDescription();
// console.log(description);
