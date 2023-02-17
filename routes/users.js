const express = require('express');
const router = express.Router();

// for user page
const usersController = require('../controllers/user_controller');

router.get('/profile',usersController.profile);

// for post page
const postController = require('../controllers/post_controller');

router.get('/post',postController.post);

// for sign in page
router.get('/signin',usersController.signin);

// for sign up page
router.get('/signup',usersController.signup);

router.post('/create',usersController.create);

module.exports = router;