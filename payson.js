var https = require('https');

var options = {
	// https://www.payson.se/integration/egen-integration
	
	//
	// Information about the seller
	//
	'SellerEmail': '', // 50, obligatory

	//
	// Information about the buyer
	//
	'BuyerFirstName': '', // 70
	'BuyerLastName': '', // 70

	//
	// Product information
	//
	'Description': '', // 200, oblig
	'Cost': 0, // oblig
	'ExtraCost': 0, // oblig

	//
	// Transaction data
	//
	'RefNr': '', // 50
	'OkUrl': '', // 255, oblig, return url after purchase
	'AgentId': 0, // oblig
	'MD5': '', // oblig
	'GuaranteeOffered': 1, // oblig, 1: off, 2: on

	//
	// Special
	//
	// Obligatory text on reciept if activated: "Observera att Payson AB
	// kommer att stå som betalningsmottagare på ditt kontoutdrag."
	'CustomReceipt': 'false', // set to true to show reciept on OkUrl

	// 0: All payment methods
	// 1: Cards (VISA/MasterCard)
	// 2: Internet banks (SEB, Handelsbanken, Nordeaa, Swedbank)
	// 3: Money on Payson account
	'PaymentMethod': '', // 20
};

exports.buy = function (opts, callback) {
	var httpsopts = {
		hostname: 'www.payson.se',
		path: opts.test ?
			'/testagent/default.aspx' :
			'/merchant/default.aspx' 
		method: 'POST'
		
	};

	https.request(httpsopts, function (res) {

	});
}
