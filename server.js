/* PAGE ACCESS TOKEN = EAAEGSemgMWUBAHZBGhT0IMVb51d3cn15pYBiiMkBZAHkM22f5g87GUi1ZBisT3dfu4En21IxkDweieZCSOw5yYCJ8LkiTDwDauZBnMJnDFzeEnku1PhWka8jtGgUho5BpQAhmQGdVdjdDZCgiemDJCQmP9ksSi1wveIyPQ3wGPmYcIJFEcg9h3
 * WIT TOKEN = AFESWA4OPI36ACJCO3S7SCZC2QJKIZNU
 * APP SECRET = 70f654a2efe272f120c8497e86ec357c
 */

 const bodyParser = require('body-parser');
 const crypto = require('crypto');
 const express = require('express');
 const fetch = require('node-fetch');

 let Wit = null;
 let log = null;
 try {
  // if running from repo
  Wit = require('../').Wit;
  log = require('../').log;
} catch (e) {
	Wit = require('node-wit').Wit;
	log = require('node-wit').log;
}

// Webserver parameter
const PORT = process.env.PORT || 3000;

// Wit.ai parameters
const WIT_TOKEN = "AFESWA4OPI36ACJCO3S7SCZC2QJKIZNU";

// Messenger API parameters
const FB_PAGE_TOKEN = "EAAEGSemgMWUBAHZBGhT0IMVb51d3cn15pYBiiMkBZAHkM22f5g87GUi1ZBisT3dfu4En21IxkDweieZCSOw5yYCJ8LkiTDwDauZBnMJnDFzeEnku1PhWka8jtGgUho5BpQAhmQGdVdjdDZCgiemDJCQmP9ksSi1wveIyPQ3wGPmYcIJFEcg9h3";
if (!FB_PAGE_TOKEN) { throw new Error('missing FB_PAGE_TOKEN') }
	const FB_APP_SECRET = "70f654a2efe272f120c8497e86ec357c";
if (!FB_APP_SECRET) { throw new Error('missing FB_APP_SECRET') }

	let FB_VERIFY_TOKEN = null;
crypto.randomBytes(8, (err, buff) => {
	if (err) throw err;
	FB_VERIFY_TOKEN = buff.toString('hex');
	console.log(`/webhook will accept the Verify Token "${FB_VERIFY_TOKEN}"`);
});

// ----------------------------------------------------------------------------
// Messenger API specific code

// See the Send API reference
// https://developers.facebook.com/docs/messenger-platform/send-api-reference

const fbMessage = (id, text) => {
	const body = JSON.stringify({
		recipient: { id },
		message: { text },
	});
	const qs = 'access_token=' + encodeURIComponent(FB_PAGE_TOKEN);
	return fetch('https://graph.facebook.com/me/messages?' + qs, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body,
	})
	.then(rsp => rsp.json())
	.then(json => {
		if (json.error && json.error.message) {
			throw new Error(json.error.message);
		}
		return json;
	});
};

const fbTyping = (id, text) => {
	const body = JSON.stringify({
		recipient: { id },
		sender_action: { text },
	});
	const qs = 'access_token=' + encodeURIComponent(FB_PAGE_TOKEN);
	return fetch('https://graph.facebook.com/me/messages?' + qs, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body,
	})
	.then(rsp => rsp.json())
	.then(json => {
		if (json.error && json.error.message) {
			throw new Error(json.error.message);
		}
		return json;
	});
};

// ----------------------------------------------------------------------------
// Wit.ai bot specific code

// This will contain all user sessions.
// Each session has an entry:
// sessionId -> {fbid: facebookUserId, context: sessionState}
const sessions = {};

const findOrCreateSession = (fbid) => {
	let sessionId;
  // Let's see if we already have a session for the user fbid
  Object.keys(sessions).forEach(k => {
  	if (sessions[k].fbid === fbid) {
      // Yep, got it!
      sessionId = k;
  }
});
  if (!sessionId) {
    // No session found for user fbid, let's create a new one
    sessionId = new Date().toISOString();
    sessions[sessionId] = {fbid: fbid, context: {}};
}
return sessionId;
};

// Setting up our bot
const wit = new Wit({
	accessToken: WIT_TOKEN,
	logger: new log.Logger(log.INFO)
});

// Starting our webserver and putting it all together
const app = express();
app.use(({method, url}, rsp, next) => {
	rsp.on('finish', () => {
		console.log(`${rsp.statusCode} ${method} ${url}`);
	});
	next();
});
app.use(bodyParser.json({ verify: verifyRequestSignature }));

// Webhook setup
app.get('/webhook', (req, res) => {
	if (req.query['hub.mode'] === 'subscribe' &&
		req.query['hub.verify_token'] === FB_VERIFY_TOKEN) {
		res.send(req.query['hub.challenge']);
} else {
	res.sendStatus(400);
}
});

// Message handler
app.post('/webhook', (req, res) => {
  // Parse the Messenger payload
  // See the Webhook reference
  // https://developers.facebook.com/docs/messenger-platform/webhook-reference
  const data = req.body;

  if (data.object === 'page') {
  	data.entry.forEach(entry => {
  		entry.messaging.forEach(event => {
  			if (event.message && !event.message.is_echo) {
          // Yay! We got a new message!
          // We retrieve the Facebook user ID of the sender
          const sender = event.sender.id;

          // We could retrieve the user's current session, or create one if it doesn't exist
          // This is useful if we want our bot to figure out the conversation history
          // const sessionId = findOrCreateSession(sender);

          // We retrieve the message content
          const {text, attachments} = event.message;

          	if (attachments) {
            // We received an attachment
            // Let's reply with an automatic message
            fbMessage(sender, 'Sorry I can only process text messages for now.')
            .catch(console.error);
        	} else if (text) {
            // We received a text message
            // Let's run /message on the text to extract some entities
            wit.message(text).then(({entities}) => {
	              // You can customize your response to these entities
	              if(entities.welcome[0].confidence > 0.9){
	              	fbMessage(sender, "Hello! My name is Aria! I can help you cancel a flight reservation or modify an existing flight. How can I assist you?");
	              }
	              if(entities.cancel[0].confidence > 0.9){
	              	fbTyping(sender, "typing_on");
	              	fbMessage(sender, "Sure thing, can I get your first and last name please?");
	              }
	              if(entities.name[0].confidence > 0.9){
	              	fbTyping(sender, "typing_on");
	              	fbMessage(sender, `Hello, ${entities.name[0].value}!`);
	              }
	              if(entities.phoneNum[0].confidence > 0.9){
	              	fbTyping(sender, "typing_on");
	              	fbMessage(sender, "A verification number has been sent to your phone number to confirm your identity.");
	              }
	              if(entities.reservationNum[0].confidence > 0.9){
	              	fbTyping(sender, "typing_on");
	              	fbMessage(sender, "Thank you. Please give me a moment while I look up your reservation.");
	              	fbTyping(sender, "typing_on");
	              }
	              // For now, let's reply with another automatic message
	              fbMessage(sender, "Sorry, could you repeat that please?");
          })
            .catch((err) => {
            	console.error('Oops! Got an error from Wit: ', err.stack || err);
            })
        }
    } else {
    	console.log('received event', JSON.stringify(event));
    }
});
  	});
  }
  res.sendStatus(200);
});

/*
 * Verify that the callback came from Facebook. Using the App Secret from
 * the App Dashboard, we can verify the signature that is sent with each
 * callback in the x-hub-signature field, located in the header.
 *
 * https://developers.facebook.com/docs/graph-api/webhooks#setup
 *
 */
 function verifyRequestSignature(req, res, buf) {
 	var signature = req.headers["x-hub-signature"];
 	console.log(signature);

 	if (!signature) {
    // For testing, let's log an error. In production, you should throw an
    // error.
    console.error("Couldn't validate the signature.");
} else {
	var elements = signature.split('=');
	var method = elements[0];
	var signatureHash = elements[1];

	var expectedHash = crypto.createHmac('sha1', FB_APP_SECRET)
	.update(buf)
	.digest('hex');

	if (signatureHash != expectedHash) {
		throw new Error("Couldn't validate the request signature.");
	}
}
}

app.listen(PORT);
console.log('Listening on :' + PORT + '...');