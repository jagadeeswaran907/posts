const express = require('express');
// calling an router
const router = express.Router();

router.post("/comment-add", (req, res) => {
    
    connection.query("call user_comment (?,?)", [req.body.Comment,req.body.PostID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            
            res.status(200).json(results[0]);
            
        }
    });

});
router.get("/comment-get", (req, res) => {

    connection.query("call user_comment_get (?)", [req.body.PostID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});

module.exports = router;