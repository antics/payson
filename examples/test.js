var payson = require('../payson');

var
params = {
	returnUrl: 'http://example.com/return',
	cancelUrl: 'http://example.com/cancel',
	memo: 'A test payment.',
	
	senderEmail: 'sender@example.com',
	senderFirstName: 'John',
	senderLastName: 'Doe',
	
	"receiverList.receiver(0).email": 'receiver@example.com',
	"receiverList.receiver(0).amount": 10
},
agentid = 12345,
md5key = 'xxx-xxxx-xxx-xxx';

payson.pay(agentid, md5key, params, function (err, response) {
	console.log(err||response);	
});
