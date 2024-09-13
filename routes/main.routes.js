// Modhus Main Router Section (MODHU HE HE)

const express = require('express');
const {  home } = require('../controller/main.controller');
const { signup_post, signup_get } = require('../controller/signup');
const { login_get, login_post } = require('../controller/login');
const router = express.Router();

  router.get("/", home);
  router.get("/signup", signup_get);
  router.post("/signup", signup_post);
  router.get("/login", login_get);
  router.post("/login", login_post);

  module.exports = router;


