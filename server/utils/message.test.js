var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Stefano', 'YUPPIDU');

    expect(message.from).toBe('Stefano');
    expect(message.text).toBe('YUPPIDU');
    expect(message).toInclude({
      from: 'Stefano',
      text: 'YUPPIDU'
    });
    expect(message.createdAt).toBeA('number');
  });
});
describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    var locationMessage = generateLocationMessage('Admin', 1,1);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({
      from: 'Admin',
      url: 'https://www.google.com/maps?q=1,1'
    });
  });
});
