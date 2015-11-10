var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

var util = require("util");
var braintree = require("braintree");

console.log('Server running at http://127.0.0.1:1337/');


// var util = require('util'),
//     braintree = require('braintree');
//
// var gateway = braintree.connect({
//   environment: braintree.Environment.Sandbox,
//   merchantId: 'your_merchant_id',
//   publicKey: 'your_public_key',
//   privateKey: 'your_private_key'
// });
//
// gateway.transaction.sale({
//   amount: '5.00',
//   paymentMethodNonce: "nonce-from-the-client",
//   options: {
//     submitForSettlement: true
//   }
// },
//   function(err, result) {
//     if (result) {
//       if (result.success) {
//         console.log("Transaction ID: " + result.transaction.id)
//       } else {
//         console.log(result.message)
//       }
//     } else {
//       console.log(err)
//     }
// });
