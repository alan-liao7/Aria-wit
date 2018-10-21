var authy = require('authy')('ISkOPPuWGWh5bTw7nUKjhefw2uVJllYS');

const express = require('express');
const router = express.Router();
var phonenum;

router.post('/', (request, response, next) => {

    phonenum = request.body.phone;

    authy.phones().verification_start(phonenum, '1', { via: 'sms', locale: 'en', code_length: '6' }, function(err, res) {
        response.send(res.success);
    });
})


module.exports = router;