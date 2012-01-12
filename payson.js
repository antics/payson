var
https = require('https'),
querystring = require('querystring');

exports.pay = function (agentid, md5key, params, callback) {

	params = querystring.stringify(params);
	
	var httpsopts = {
		hostname: 'api.payson.se',
		path: '/1.0/Pay/',
		method: 'POST',
		headers: {
			'PAYSON-SECURITY-USERID': agentid,
			'PAYSON-SECURITY-PASSWORD': md5key,
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': params.length
		}
	};

	var req = https.request(httpsopts, function (res) {
		var data = '';

		res.setEncoding('utf-8');
		
		res.on('data', function (buffer) {
			data += buffer;
		})

		res.on('end', function () {
			var response = querystring.parse(data);

			if (response['responseEnvelope.ack'] == 'SUCCESS') {
				callback(null, {
				   timestamp: response['responseEnvelope.timestamp'],
				   token: response['TOKEN']
			   });
			}
			else if (response['responseEnvelope.ack'] == 'FAILURE') {
				callback({
					timestamp: response['responseEnvelope.timestamp'],
					id: response['errorList.error(0).errorId'],
					message: response['errorList.error(0).message']
				});
			}
		});
	});

	
	req.on('error', function (e) {
		console.error(e);
	});

	req.write(params);
	req.end();

}
