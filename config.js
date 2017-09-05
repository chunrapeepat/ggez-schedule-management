const PORT = (process.env.NODE_ENV === 'development') ? 3000 : 443
const secretKey = process.env.secretKey || 'cat'

const facebookAuth = {
  clientID: process.env.facebookClientID || 'secret',
  clientSecret: process.env.facebookClientSecret || 'secret',
  callbackURL: 'http://localhost:3000/auth/facebook/return'
}

module.exports = {
  PORT,
  facebookAuth,
  secretKey,
}
