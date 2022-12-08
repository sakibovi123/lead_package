function sendSMS(from, to, body) {
    const sid = "AC2b0cc7c783ccc1e82f3771636dda5e73"
    const auth_token = "bdb32f3656485e868270f68a1b3024ee"

    let twilio = require('twilio')(sid, auth_token)

    twilio.messages.create({
        from: from,
        to: to,
        body: body
    }).then(r =>console.log(r))
        .catch(e => console.log(e))
}