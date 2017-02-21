/**
 * Created by chooper on 2/21/17.
 */
var mailer = require('nodemailer');
mailer.SMTP = {
    host: 'host.com',
    port:587,
    use_authentication: true,
    user: 'you@example.com',
    pass: 'xxxxxx'
};

fs.readFile("./attachment.txt", function (err, data) {

    mailer.send_mail({
        sender: 'sender@sender.com',
        to: 'dest@dest.com',
        subject: 'Attachment!',
        body: 'mail content...',
        attachments: [{'filename': 'attachment.txt', 'content': data}]
    }), function(err, success) {
        if (err) {
            // Handle error
        }

    }
});