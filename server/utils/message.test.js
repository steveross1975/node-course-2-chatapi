var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () =>{
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
