var authy = require('authy')('ISkOPPuWGWh5bTw7nUKjhefw2uVJllYS');

const express = require('express');
const router = express.Router();

router.post('/', (request, response, next) => {

    
    var phonenum = request.body.phone;
    var verifnum = request.body.verification;

    authy.phones().verification_check(phonenum, '1', verifnum, function (err, res) {
        response.send(res.success);
    });
})


module.exports = router;