var express = require('express');
var router = express.Router();
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
const {create} = require('../models/comments');

router.post('/create', (req, res, next) => {
    // if(req.session.username){
    //     errorPrint("must be logged in to comment");
    //     req.json({
    //         code: -1,
    //         status: "danger",
    //         message: "Must be logged in to create comment"
    //     });
    // }else{

    // }

    let {comment, postId} = req.body;
    let username = 'myuser12';
    let userId = 33
})

module.exports = router;