const express = require('express');
const router = express.Router();
const passport = require('passport');
const {Test} = require('../controllers/index.controller');
router.get(
    '/list',
    passport.authenticate('jwt', {session: false}),
    Test.admin_get_test_list
);
router.get(
    '/detail',
    passport.authenticate('jwt', {session: false}),
    Test.admin_get_test_detail
);
router.get(
    '/belong-class',
    passport.authenticate('jwt', {session: false}),
    Test.admin_get_test_belong_class
);
module.exports = router