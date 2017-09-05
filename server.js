const express = require('express')
const next = require('next')
const { PORT, facebookAuth, secretKey } = require('./config')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FacebookTokenStrategy = require('passport-facebook').Strategy
const port = parseInt(process.env.PORT, 10) || PORT
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// configuration facebook passport
passport.use(new FacebookTokenStrategy({
    clientID: facebookAuth.clientID,
    clientSecret: facebookAuth.clientSecret,
    callbackURL: facebookAuth.callbackURL,
  },
  function(accessToken, refreshToken, profile, cb) {
    //connect with database
    /*
    id : '810438429130515',
      displayName: 'Chun Rapeepat',
      name: {},
      provider: 'facebook',
      _raw: '{"name":"Chun Rapeepat","id":"810438429130515"}',
      _json: { name: 'Chun Rapeepat', id: '81043842913
    */
    return cb(null, profile)
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user)
})

passport.deserializeUser(function(obj, cb) {
  cb(null, obj)
})

const serverRoute = function() {
  const server = express()

  server.use(require('morgan')('combined'))
  server.use(cookieParser(secretKey))
  server.use(require('body-parser').urlencoded({ extended: true }))
  server.use(session({ secret: secretKey }))
  server.use(passport.initialize())
  server.use(passport.session())

  server.get('/', (req, res) => {
    if(req.user === undefined) {
      res.redirect('/login')
    } else {
      return app.render(req, res, '/', req.query)
    }
  })

  server.get('/automatic', (req, res) => {
    if(req.user === undefined) {
      res.redirect('/login')
    } else {
      return app.render(req, res, '/automatic', req.query)
    }
  })

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login', req.query)
  })

  server.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
  })

  server.get('/auth/facebook', passport.authenticate('facebook'))

  server.get('/auth/facebook/return', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
}

app.prepare().then(serverRoute)
