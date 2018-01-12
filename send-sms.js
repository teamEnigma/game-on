// Twilio Credentials
const accountSid = 'ACb6c22dfaa61a81e5b623e5897fe7f44b';
const authToken = process.env.AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+18474143489',
    from: '+19473334263',
    body: 'Game ON!',
  })
  .then(message => console.log(message.sid));