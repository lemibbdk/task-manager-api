const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akibbrs@hotmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
    })
}

sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akibbrs@hotmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to se you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
