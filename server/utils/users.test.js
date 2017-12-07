const expect = require('expect');

const {Users} = require ('./users');

describe ('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: 2,
      name: 'Jen',
      room: 'React Course'
    }, {
      id: 3,
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '1234',
      name: 'Stefano',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userRemoved = users.removeUser(2);
    expect(userRemoved.id).toBe(2);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userRemoved = users.removeUser(343057427052);
    expect(userRemoved).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userToFetch = users.getUser(2);
    expect(userToFetch.id).toBe(2);
  });

  it('should not find a user', () => {
    var userToFetch = users.getUser(346534634);
    expect(userToFetch).toNotExist();
  });




  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });
  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
